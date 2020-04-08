// @flow

type SetUserDetailAction = (
  name: string,
  value: string
) => {
  type: "SET_USER_DETAIL",
  name: string,
  value: string,
};

export const setUserDetailAction: SetUserDetailAction = (name, value) => ({
  type: "SET_USER_DETAIL",
  name,
  value,
});

export default setUserDetailAction;
