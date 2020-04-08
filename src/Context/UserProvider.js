// @flow

import React, { useReducer } from "react";
import useCompare from "use-deep-compare-effect";
import { useDebouncedCallback } from "use-debounce";
import { UserContext } from "./UserContext";
import { UserReducer } from "./UserReducer";
import { getDefaultUserContext } from "./Helpers";
import { getValidation } from "../Helpers/Validation/getValidation";
import { setUserValidationAction } from "./Actions/setUserValidationAction";

type Props = {
  children: any,
};

const { Provider } = UserContext;

export const UserProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(UserReducer, getDefaultUserContext());

  const [debouncedUpdateDetailsValidation] = useDebouncedCallback((value) => {
    const groupName = "details";
    const validationResult = getValidation(groupName, value);
    dispatch(setUserValidationAction(groupName, validationResult || null));
  }, 200);

  const [debouncedUpdateAddressValidation] = useDebouncedCallback((value) => {
    const groupName = "address";
    const validationResult = getValidation(groupName, value);
    dispatch(setUserValidationAction(groupName, validationResult || null));
  }, 200);
  /**
   * Deep check changes in the state for details data change.
   * Performs debounced validation on the data.
   */
  useCompare(() => {
    debouncedUpdateDetailsValidation(state.data.details);
  }, [state.data.details]);

  /**
   * Deep check changes in the state for address data change.
   * Performs debounced validation on the data.
   */
  useCompare(() => {
    debouncedUpdateAddressValidation(state.data.address);
  }, [state.data.address]);

  // @TODO could add persistance in localStorage or to API server for session storage

  return (
    <Provider
      value={{
        ...state,
        dispatch: dispatch,
      }}
    >
      {children}
    </Provider>
  );
};

export default UserProvider;
