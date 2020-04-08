// @flow

export const USER_ADDRESS_VALIDATION_RULES = {
  streetNum: "required|numeric",
  streetName: "required",
  streetType: "required",
  suburb: "required",
  postcode: "required|postcode_au",
};

export default USER_ADDRESS_VALIDATION_RULES;
