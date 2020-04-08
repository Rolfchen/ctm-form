// @flow

import set from "lodash/set";
import cloneDeep from "lodash/cloneDeep";
import type { UserContextStateType } from "./Types/UserContextStateType";

export const UserReducer = (state: UserContextStateType, action: any) => {
  switch (action.type) {
    case "SET_USER_ADDRESS":
      const addressFieldPath = `data.address.${action.name}`;
      const currentAddressState = cloneDeep(state);
      const newAddressState = set(
        currentAddressState,
        addressFieldPath,
        action.value
      );
      return newAddressState;
    case "SET_USER_DETAIL":
      const fieldPath = `data.details.${action.name}`;
      const currentDetailsState = cloneDeep(state);
      const newDetailsState = set(currentDetailsState, fieldPath, action.value);
      return newDetailsState;

    case "SET_USER_VALIDATION":
      return {
        ...state,
        validation: {
          ...state.validation,
          [action.groupName]: action.validationGroup,
        },
      };
    case "SET_USER_PROGRESS_STEP":
      return {
        ...state,
        progress: {
          step: action.step,
        },
      };
    default:
      return state;
  }
};

export default UserReducer;
