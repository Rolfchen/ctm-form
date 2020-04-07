// @flow

import * as React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

type Props = {
  name?: string,
  className?: string,
  children?: React.Node,
  buttonProps?: any,
  to?: string,
};

export const SmartButton = ({
  name = "",
  className,
  buttonProps,
  children,
  to,
}: Props) => {
  const innerButton = (children?: React.Node) => (
    <button type="button" {...buttonProps}>
      {children}
    </button>
  );

  return (
    <div
      className={classnames(className, "SmartButton", "SmartButton__container")}
    >
      {to ? (
        <Link to={to}>{innerButton(children)}</Link>
      ) : (
        innerButton(children)
      )}
    </div>
  );
};

export default SmartButton;
