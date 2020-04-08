// @flow

import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import { useDebouncedCallback } from "use-debounce";
import { Form, SmartInput, SmartButton } from "../Components/Common";
import { UserContext } from "../Context/UserContext";
import { setUserDetailAction } from "../Context/Actions";

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
  const {
    dispatch,
    validation: { details: fieldValidations },
  } = useContext(UserContext);
  const handleChange = (event: any, name?: string) => {
    dispatch(setUserDetailAction(name || "", event.target.value));
  };

  return (
    <Form name={name} className={classes.mainForm}>
      <h3>Your Details</h3>
      <SmartInput
        name="firstName"
        label="First Name"
        placeholder="Jasmine"
        onChange={handleChange}
        helpText="Enter your first name"
        validation={fieldValidations.items["firstName"]}
        required
      />
      <SmartInput
        name="lastName"
        label="Last Name"
        placeholder="Teeh"
        helpText=""
        onChange={handleChange}
        validation={fieldValidations.items["lastName"]}
        required
      />
      <SmartInput
        name="email"
        label="Email"
        type="email"
        placeholder="j.teeh@halfice.com"
        onChange={handleChange}
        validation={fieldValidations.items["email"]}
        required
      />
      <SmartInput
        name="phone"
        label="Phone (optional)"
        placeholder="e.g. 0455 666 777"
        validation={fieldValidations.items["phone"]}
        helpText="If providing landline, please add the area code."
        onChange={handleChange}
      />
      <SmartButton to="/address" disabled={!fieldValidations.isValid}>
        Next
      </SmartButton>
    </Form>
  );
};

export default UserDetails;
