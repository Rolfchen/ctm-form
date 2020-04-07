// @flow

import React from "react";
import { createUseStyles } from "react-jss";
import { Form, SmartInput, SmartButton } from "../Components/Common";

type Props = {
  name?: string,
};

const useStyles: any = createUseStyles({
  mainForm: {
    flexDirection: "column",
  },
});

export const UserDetails = ({ name = "userDetails" }: Props) => {
  const classes = useStyles();
  return (
    <Form name={name} className={classes.mainForm}>
      <h2>Free Quotation!</h2>
      <div>Enter your details below for a free quotation!</div>
      <SmartInput
        name="firstName"
        label="First Name"
        placeholder="Jasmine"
        required
      />
      <SmartInput
        name="lastName"
        label="Last Name"
        placeholder="Teeh"
        required
      />
      <SmartInput
        name="email"
        label="Email"
        type="email"
        placeholder="j.teeh@halfice.com"
        required
      />
      <SmartInput
        name="phone"
        label="Phone (optional)"
        placeholder="e.g. 0455 666 777"
      />
      <SmartButton to="/address">Next</SmartButton>
    </Form>
  );
};

export default UserDetails;
