// @flow

import React, { useCallback } from "react";
import classnames from "classnames";
import { createUseStyles, useTheme } from "react-jss";
import type { OptionType } from "./Types/OptionType";
import type { Theme } from "../../Configs/theme";

const useStyles: any = createUseStyles((theme: Theme) => ({
  label: theme.typography.label,
  container: {
    padding: "5px 10px 5px 0px",
  },
}));

type Props = {
  name?: string,
  label?: string,
  className?: string,
  placeholder?: string,
  type?: "text" | "number" | "email" | "password" | "select",
  required?: boolean,
  options?: OptionType[],
  inputProps?: any,
};

export const SmartInput = ({
  name = "",
  className,
  type = "text",
  placeholder = "",
  label = "",
  inputProps,
  required = false,
  options = [],
  ...props
}: Props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const renderOptions = useCallback(
    (options) => {
      return options
        ? options.map((optionData: OptionType, idx: number) => (
            <option key={idx} value={optionData.value}>
              {optionData.text}
            </option>
          ))
        : "";
    },
    [options]
  );
  return (
    <div
      className={classnames(
        classes.container,
        className,
        "SmartInput",
        "SmartInput__container"
      )}
    >
      {label && <label className={classes.label}>{label}</label>}
      {type === "select" ? (
        <select name={name} required={required}>
          {renderOptions(options)}
        </select>
      ) : (
        <input
          {...inputProps}
          placeholder={placeholder}
          name={name}
          required={required}
        />
      )}
    </div>
  );
};

export default SmartInput;
