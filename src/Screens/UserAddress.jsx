// @flow

import React from "react";
import { Form, SmartInput, SmartButton } from "../Components/Common";
import { createUseStyles } from "react-jss";
import type { OptionType } from "../Components/Common/Types/OptionType";

type Props = {
  name?: string,
};

const useStyles: any = createUseStyles({
  fieldGroup: {
    display: "flex",
    flexBasis: "100%",
    flexDirection: "column",
  },
  fieldGroupHeading: {
    marginBottom: "8px",
  },
  fieldGroupBody: {
    flexDirection: "row",
    display: "flex",
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
  return (
    <Form name={name}>
      <div className={classes.fieldGroup}>
        <h4 className={classes.fieldGroupHeading}>Street Address</h4>
        <div className={classes.fieldGroupBody}>
          <SmartInput
            name="streetNum"
            type="number"
            fieldWidth={50}
            label="Number"
            placeholder="1"
            required
          />
          <SmartInput
            name="streetName"
            fieldWidth="fill"
            label="Street name"
            placeholder="Test Dr."
            required
          />
          <SmartInput
            type="select"
            name="streetType"
            label="Street type"
            options={streetTypes}
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
            required
          />
          <SmartInput
            name="postcode"
            label="Postcode"
            placeholder="4000"
            required
          />
        </div>
      </div>
      <SmartButton to={"/"}>Back</SmartButton>
    </Form>
  );
};

export default UserAddress;
