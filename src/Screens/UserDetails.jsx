// @flow

import React from "react";
import { Form, SmartButton } from "../Components/Common";

type Props = {
  name?: string,
};

export const UserDetails = ({ name = "userDetails" }: Props) => {
  return (
    <Form name={name}>
      <div>This is form 1</div>
      <SmartButton to="/address">Next</SmartButton>
    </Form>
  );
};

export default UserDetails;
