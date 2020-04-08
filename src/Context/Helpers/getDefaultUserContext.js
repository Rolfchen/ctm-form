// @flow

import type { UserContextStateType } from "../Types/UserContextStateType";

type GetDefaultUserContext = () => UserContextStateType;

export const getDefaultUserContext: GetDefaultUserContext = () => ({
  progress: {
    step: 1,
  },
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
      streetType: "St",
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
