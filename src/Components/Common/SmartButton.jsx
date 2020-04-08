// @flow

import * as React from "react";
import classnames from "classnames";
import { useHistory } from "react-router-dom";

type Props = {
  name?: string,
  className?: string,
  children?: React.Node,
  buttonProps?: any,
  to?: string,
  disabled?: boolean,
  onClick?: (e: any) => void,
};

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
      >
        {children}
      </button>
    </div>
  );
};

export default SmartButton;
