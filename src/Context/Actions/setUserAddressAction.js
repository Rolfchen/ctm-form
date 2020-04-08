// @flow

type SetUserAddressAction = (
  name: string,
  value: string
) => {
  type: "SET_USER_ADDRESS",
  name: string,
  value: string,
};

export const setUserAddressAction: SetUserAddressAction = (name, value) => ({
  type: "SET_USER_ADDRESS",
  name,
  value,
});

export default setUserAddressAction;
