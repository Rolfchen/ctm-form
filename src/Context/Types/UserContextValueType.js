// @flow

import type { UserContextStateType } from "./UserContextStateType";

export type UserContextValueType = UserContextStateType & {
  dispatch: any,
};
