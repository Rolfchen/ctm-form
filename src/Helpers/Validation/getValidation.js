// @flow

import Validator from "validatorjs";
import {
  USER_DETAILS_VALIDATION_RULES,
  USER_ADDRESS_VALIDATION_RULES,
  registerCustomValidationRules,
} from "./Rules";

import type { ValidationGroupType } from "./Types/ValidationGroupType";
import type { ValidationResultType } from "./Types/ValidationResultType";

type GetValidation = (
  groupName: string,
  values: any
) => false | ValidationGroupType;

// Register validation rules
registerCustomValidationRules();

export const getValidation: GetValidation = (groupName, values) => {
  const ruleSet = groupName
    ? groupName == "address"
      ? { ...USER_ADDRESS_VALIDATION_RULES }
      : { ...USER_DETAILS_VALIDATION_RULES }
    : "";
  if (ruleSet === "") {
    return false;
  }
  const validator = new Validator(values, ruleSet);
  const isValid = validator.passes();
  const validationResult: {
    [fieldName: string]: ValidationResultType,
  } = Object.keys(values).reduce((prev, attribute) => {
    const errorMessage = validator.errors.first(attribute);
    return {
      ...prev,
      [attribute]: {
        isValid: errorMessage ? false : true,
        message: errorMessage || "",
      },
    };
  }, {});

  return {
    isValid,
    items: {
      ...validationResult,
    },
  };
};

export default getValidation;
