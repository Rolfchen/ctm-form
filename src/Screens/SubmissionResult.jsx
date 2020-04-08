// @flow

import React, { useContext, useEffect } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { UserContext } from "../Context/UserContext";
import { useHistory } from "react-router-dom";
import { setUserProgressStepAction } from "../Context/Actions";

type Props = {
  name?: string,
};

const useStyles: any = createUseStyles((theme) => ({
  mainForm: {
    flexDirection: "column",
  },
}));

export const SubmissionResult = ({ name = "Submission Results" }: Props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const history = useHistory();

  const {
    dispatch,
    data: { address, details },
    validation,
  } = useContext(UserContext);

  useEffect(() => {
    dispatch(setUserProgressStepAction(3));
  }, []);
  // if (validation.details.isValid && validation.address.isValid) {
  //   console.log("Invalid data!");
  //   history.push("/");
  // }
  return (
    <div className={classes.mainForm}>
      <h2>Success!</h2>
      <div>
        Thank you for your submission. Please see your submitted results below.
      </div>
      <div>
        <h3>Details</h3>
        <ul>
          <li>
            <strong>Name: </strong>
            {`${details.firstName || ""} ${details.lastName || ""}`}
          </li>
          <li>
            <strong>Email: </strong>
            {`${details.email || ""}`}
          </li>
          {details.phone && (
            <li>
              <strong>Phone: </strong>
              {`${details.phone || ""}`}
            </li>
          )}
          <li>
            <strong>Address: </strong>
            {`${address.streetNum || ""} ${address.streetName || ""} ${
              address.streetType
            } ${address.suburb} ${address.postcode}`}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubmissionResult;
