// @flow

import type { ValidationGroupType } from "../../Helpers/Validation/Types/ValidationGroupType";

export type UserContextStateType = {
  data: {
    details: {
      firstName?: string,
      lastName?: string,
      email?: string,
      phone?: string,
    },
    address: {
      streetNum?: string,
      streetName?: string,
      streetType?: string,
      suburb?: string,
      postcode?: string,
    },
  },
  validation: {
    details: ValidationGroupType,
    address: ValidationGroupType,
  },
};
