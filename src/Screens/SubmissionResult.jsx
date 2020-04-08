// @flow

import React, { useContext, useEffect } from "react";
import classnames from "classnames";
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

  return (
    <div className={classnames("Submission--Success", classes.mainForm)}>
      <h2>Success!</h2>
      <div>
        Thank you for your submission. Please see your submitted results below.
      </div>
      <div>
        <h3>Details</h3>
        <ul>
          <li className="Submission--Name">
            <strong>Name: </strong>
            <span className="Submission__text">
              {`${details.firstName || ""} ${details.lastName || ""}`}
            </span>
          </li>
          <li className="Submission--Email">
            <strong>Email: </strong>
            <span className="Submission__text">{`${details.email || ""}`}</span>
          </li>
          {details.phone && (
            <li className="Submission--Phone">
              <strong>Phone: </strong>
              <span className="Submission__text">
                {`${details.phone || ""}`}
              </span>
            </li>
          )}
          <li className="Submission--Address">
            <strong>Address: </strong>
            <span className="Submission__text">
              {`${address.streetNum || ""} ${address.streetName || ""} ${
                address.streetType
              } ${address.suburb} ${address.postcode}`}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubmissionResult;
