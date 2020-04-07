// @flow

import React from "react";
import { Form } from "../Components/Common";

type Props = {
  name?: string,
};

export const UserAddress = ({ name }: Props) => {
  return <Form name={name}>This is form 2</Form>;
};

export default UserAddress;
