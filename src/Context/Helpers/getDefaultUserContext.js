// @flow

import type { UserContextStateType } from "../Types/UserContextStateType";

type GetDefaultUserContext = () => UserContextStateType;

export const getDefaultUserContext: GetDefaultUserContext = () => ({
  data: {
    details: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    address: {
      streetNum: "",
      streetName: "",
      streetType: "",
      suburb: "",
      postcode: "",
    },
  },
  validation: {
    details: {
      isValid: true,
      items: {},
    },
    address: {
      isValid: true,
      items: {},
    },
  },
});

export default getDefaultUserContext;
