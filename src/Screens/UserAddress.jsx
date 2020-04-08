// @flow

import React, { useContext, useEffect } from "react";
import { Form, SmartInput, SmartButton } from "../Components/Common";
import { createUseStyles } from "react-jss";
import { UserContext } from "../Context/UserContext";
import {
  setUserAddressAction,
  setUserProgressStepAction,
} from "../Context/Actions";

import type { OptionType } from "../Components/Common/Types/OptionType";

type Props = {
  name?: string,
};

const useStyles: any = createUseStyles({
  fieldGroup: {
    display: "flex",
    flexBasis: "100%",
    flexDirection: "column",
    width: "100%",
    flexWrap: "wrap",
  },
  fieldGroupHeading: {
    marginBottom: "8px",
    width: "100%",
  },
  fieldGroupBody: {
    flexDirection: "row",
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
  },
});

export const UserAddress = ({ name }: Props) => {
  const streetTypes: OptionType[] = [
    {
      value: "Cl",
      text: "Close",
    },
    {
      value: "Ct",
      text: "Circuit",
    },
    {
      value: "St",
      text: "Street",
    },
    {
      value: "Pl",
      text: "Place",
    },
    {
      value: "Ave",
      text: "Avenue",
    },
  ];
  const classes = useStyles();
  const {
    dispatch,
    validation: { address: fieldValidations, details },
    data: { address },
  } = useContext(UserContext);
  useEffect(() => {
    dispatch(setUserProgressStepAction(2));
  }, []);
  console.log("Address validation", fieldValidations);
  const handleChange = (event: any, name?: string) => {
    dispatch(setUserAddressAction(name || "", event.target.value));
  };

  return (
    <Form name="frm-address">
      <div className={classes.fieldGroup}>
        <h4 className={classes.fieldGroupHeading}>Street Address</h4>
        <div className={classes.fieldGroupBody}>
          <SmartInput
            name="streetNum"
            type="number"
            fieldWidth={50}
            label="Number"
            placeholder="1"
            onChange={handleChange}
            validation={fieldValidations.items["streetNum"]}
            value={address.streetNum || ""}
            required
          />
          <SmartInput
            name="streetName"
            fieldWidth="fill"
            label="Street name"
            placeholder="e.g. Seventy-Third"
            onChange={handleChange}
            validation={fieldValidations.items["streetName"]}
            value={address.streetName || ""}
            required
          />
          <SmartInput
            type="select"
            name="streetType"
            label="Street type"
            options={streetTypes}
            onChange={handleChange}
            value={address.streetType}
            required
          />
        </div>
      </div>
      <div className={classes.fieldGroup}>
        <div className={classes.fieldGroupBody}>
          <SmartInput
            name="suburb"
            label="Suburb/City"
            placeholder="Allpass"
            onChange={handleChange}
            validation={fieldValidations.items["suburb"]}
            value={address.suburb || ""}
            required
          />
          <SmartInput
            name="postcode"
            label="Postcode"
            placeholder="4000"
            onChange={handleChange}
            validation={fieldValidations.items["postcode"]}
            value={address.postcode || ""}
            required
          />
        </div>
      </div>
      <SmartButton to={"/"} className="Button--back">
        Back
      </SmartButton>
      <SmartButton
        disabled={!fieldValidations.isValid || !details.isValid}
        to={"/result"}
        className="Button--submit"
      >
        Submit
      </SmartButton>
    </Form>
  );
};

export default UserAddress;
