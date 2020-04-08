// @flow

import * as React from "react";
import classnames from "classnames";
import { createUseStyles, useTheme } from "react-jss";
import { useHistory } from "react-router-dom";
import type { Theme } from "../../Configs/theme";

type Props = {
  name?: string,
  className?: string,
  children?: React.Node,
  buttonProps?: any,
  to?: string,
  disabled?: boolean,
  onClick?: (e: any) => void,
};

const useStyles: any = createUseStyles((theme: Theme) => ({
  button: theme?.elements?.button || {},
  buttonDisabled: theme?.elements?.buttonDisabled || {},
}));

export const SmartButton = ({
  name = "",
  className,
  buttonProps,
  children,
  disabled = false,
  onClick = (e) => {},
  to,
}: Props) => {
  const history = useHistory();
  const theme = useTheme();
  const classes = useStyles(theme);
  const handleClick = (e) => {
    onClick(e);
    if (to) {
      history.push(to);
    }
  };

  return (
    <div
      className={classnames(className, "SmartButton", "SmartButton__container")}
    >
      <button
        type="button"
        {...buttonProps}
        onClick={handleClick}
        disabled={disabled}
        className={classnames(
          {
            [classes.button]: !disabled,
          },
          {
            [classes.buttonDisabled]: disabled,
          }
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default SmartButton;
