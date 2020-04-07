// @flow

import React from "react";
import classnames from "classnames";

type Props = {
  name?: string,
  className?: string,
  fullWidth?: boolean,
  inputProps?: any,
};

export const SmartInput = ({
  name = "",
  className,
  fullWidth = true,
  inputProps,
  ...props
}: Props) => {
  return (
    <div
      className={classnames(className, "SmartInput", "SmartInput__container")}
    >
      <input {...inputProps} />
    </div>
  );
};

export default SmartInput;
