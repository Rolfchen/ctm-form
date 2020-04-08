// @flow

import React, { createContext } from "react";
import { getDefaultUserContext } from "./Helpers/getDefaultUserContext";
import type { UserContextValueType } from "./Types/UserContextValueType";

export const UserContext = createContext<UserContextValueType>({
  ...getDefaultUserContext(),
  dispatch: () => {},
});

export default UserContext;
