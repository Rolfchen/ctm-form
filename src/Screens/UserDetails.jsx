// @flow

import React, { useContext, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useDebouncedCallback } from "use-debounce";
import { Form, SmartInput, SmartButton } from "../Components/Common";
import { UserContext } from "../Context/UserContext";
import {
  setUserDetailAction,
  setUserProgressStepAction,
} from "../Context/Actions";

type Props = {
  name?: string,
};

const useStyles: any = createUseStyles({
  mainForm: {
    flexDirection: "column",
    width: "100%",
  },
  rowContainer: {
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
});

export const UserDetails = ({ name = "userDetails" }: Props) => {
  const classes = useStyles();
  const {
    dispatch,
    validation: { details: fieldValidations },
    data: { details },
  } = useContext(UserContext);

  useEffect(() => {
    dispatch(setUserProgressStepAction(1));
  }, []);

  const handleChange = (event: any, name?: string) => {
    dispatch(setUserDetailAction(name || "", event.target.value));
  };

  return (
    <Form name="frm-details" className={classes.mainForm}>
      <h3>Your Details</h3>
      <div className={classes.rowContainer}>
        <SmartInput
          name="firstName"
          label="First Name"
          value={details.firstName || ""}
          placeholder="Jasmine"
          onChange={handleChange}
          helpText="Enter your first name"
          validation={fieldValidations.items["firstName"]}
          required
        />
        <SmartInput
          name="lastName"
          label="Last Name"
          value={details.lastName || ""}
          placeholder="Teeh"
          helpText=""
          onChange={handleChange}
          validation={fieldValidations.items["lastName"]}
          required
        />
      </div>
      <div className={classes.rowContainer}>
        <SmartInput
          name="email"
          label="Email"
          type="email"
          placeholder="j.teeh@halfice.com"
          onChange={handleChange}
          value={details.email || ""}
          validation={fieldValidations.items["email"]}
          required
        />
        <SmartInput
          name="phone"
          label="Phone (optional)"
          placeholder="e.g. 0455 666 777"
          value={details.phone || ""}
          validation={fieldValidations.items["phone"]}
          helpText="If providing landline, please add the area code."
          onChange={handleChange}
        />
      </div>
      <SmartButton
        to="/address"
        disabled={!fieldValidations.isValid}
        className="Button--next"
      >
        Next
      </SmartButton>
    </Form>
  );
};

export default UserDetails;
