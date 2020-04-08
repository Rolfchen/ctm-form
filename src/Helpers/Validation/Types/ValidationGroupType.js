// @flow

import type { ValidationResultType } from "./ValidationResultType";

export type ValidationGroupType = {
  isValid: boolean,
  items: {
    [fieldName: string]: ValidationResultType,
  },
};
