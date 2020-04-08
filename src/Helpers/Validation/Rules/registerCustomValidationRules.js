// @flow

import Validator from "validatorjs";

type CustomValidationCallback = (
  value: any,
  requirement?: string,
  attribute?: string
) => boolean;

const validateAustralianPhoneNumber: CustomValidationCallback = (value) => {
  return value.match(
    /^([0][4]{1})(\d{2})(\s{0,1})(\d{3})(\s{0,1})(\d{3})|([0][2,3,4,7,8]){1}(\s{0,1})(\d{4})(\s{0,1})(\d{4})$/
  );
};

const validateAustraliaPostcode: CustomValidationCallback = (value) => {
  return value.match(/(?:(?:[2-7]\d|0[8])(?:\d{2}))$/);
};

export const registerCustomValidationRules = () => {
  // Custom Australian phone number rules
  Validator.register(
    "phone_au",
    validateAustralianPhoneNumber,
    "Please provide a valid Australian landline or mobile number. "
  );

  Validator.register(
    "postcode_au",
    validateAustraliaPostcode,
    "Please provide a valid Australian postcode (excl. PO Boxes)"
  );
};

export default registerCustomValidationRules;
