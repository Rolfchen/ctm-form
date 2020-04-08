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
    border: `1px solid ${theme.palette.primaryColor}`,
    background: "transparent",
    width: "30px",
    height: "30px",
    marginRight: "6px",
    color: theme.palette.primaryColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "1em",
    fontSize: "1em",
  },
  activeStep: {
    background: theme.palette.primaryColor,
    color: "white",
  },
}));

export const ProgressBar = ({ totalSteps = 3 }: Props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const {
    progress: { step },
  } = useContext(UserContext);

  console.log(step);
  const renderSteps = () =>
    Array.from(Array(totalSteps), (item, idx) => (
      <li key={idx} className={classes.stepsList}>
        <div
          className={classnames(classes.step, {
            [classes.activeStep]: idx === step - 1,
          })}
        >
          {idx + 1}
        </div>
      </li>
    ));
  return (
    <div>
      <ul className={classes.stepsContainer}>{renderSteps()}</ul>
    </div>
  );
};

export default ProgressBar;
