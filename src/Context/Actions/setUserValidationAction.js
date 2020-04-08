// @flow

import type { ValidationGroupType } from "../../Helpers/Validation/Types/ValidationGroupType";

type SetUserValidationAction = (
  groupName: string,
  validationGroup: null | ValidationGroupType
) => {
  type: "SET_USER_VALIDATION",
  groupName: string,
  validationGroup: null | ValidationGroupType,
};

export const setUserValidationAction: SetUserValidationAction = (
  groupName,
  validationGroup
) => ({
  type: "SET_USER_VALIDATION",
  groupName,
  validationGroup,
});

export default setUserValidationAction;
