// @flow

import React, { useContext } from "react";
import classnames from "classnames";
import { createUseStyles, useTheme } from "react-jss";
import { UserContext } from "../../Context/UserContext";
import type { Theme } from "../../Configs/theme";

type Props = {
  totalSteps?: number,
};

const useStyles: any = createUseStyles((theme: Theme) => ({
  stepsContainer: {
    display: "flex",
    padding: "0px",
    margin: "5px 0px",
  },
  stepsList: {
    listStyle: "none",
  },
  step: {
    borderRadius: "30px",
    border: `1px solid ${theme?.palette?.primaryColor || "black"}`,
    background: "transparent",
    width: "30px",
    height: "30px",
    marginRight: "6px",
    color: `${theme?.palette?.primaryColor || "black"}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "1em",
    fontSize: "1em",
  },
  activeStep: {
    background: `${theme?.palette?.primaryColor || "black"}`,
    color: "white",
  },
}));

export const ProgressBar = ({ totalSteps = 3 }: Props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const {
    progress: { step },
  } = useContext(UserContext);

  const renderSteps = () =>
    Array.from(Array(totalSteps), (item, idx) => (
      <li
        key={idx}
        className={classnames(
          "ProgressBar__List",
          `ProgressBar__List--Step${idx + 1}`,
          classes.stepsList
        )}
      >
        <div
          className={classnames(
            {
              active: idx === step - 1,
            },
            classes.step,
            {
              [classes.activeStep]: idx === step - 1,
            }
          )}
        >
          {idx + 1}
        </div>
      </li>
    ));
  return (
    <div>
      <ul className={classnames("ProgressBar", classes.stepsContainer)}>
        {renderSteps()}
      </ul>
    </div>
  );
};

export default ProgressBar;
