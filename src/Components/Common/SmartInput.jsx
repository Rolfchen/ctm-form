// @flow

import * as React from "react";
import { useCallback, useState, useRef, useEffect } from "react";
import classnames from "classnames";
import { createUseStyles, useTheme } from "react-jss";
import type { OptionType } from "./Types/OptionType";
import type { Theme } from "../../Configs/theme";
import type { ValidationResultType } from "../../Helpers/Validation/Types/ValidationResultType";

const useStyles: any = createUseStyles((theme: Theme) => ({
  label: theme?.elements?.label || {},
  input: theme?.elements?.input || {},
  select: theme?.elements?.select || {},
  container: {
    padding: "5px 10px 5px 0px",
  },
  errorInput: {
    border: "1px solid red",
  },
  helpText: {
    fontSize: "0.8em",
    display: "block",
    color: "#666",
  },
  errorText: {
    color: "red",
  },
}));

type Props = {
  name?: string,
  label?: string,
  helpText?: string,
  validation?: ValidationResultType,
  value?: string,
  className?: string,
  placeholder?: string,
  type?: "text" | "number" | "email" | "password" | "select",
  required?: boolean,
  options?: OptionType[],
  onChange?: (e: any, name?: string) => void,
  inputProps?: any,
};

export const SmartInput = ({
  name = "",
  className,
  type = "text",
  placeholder = "",
  label = "",
  helpText = "",
  value = "",
  validation = { isValid: true, message: "" },
  inputProps,
  required = false,
  options = [],
  onChange = (e, name) => {},
  ...props
}: Props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const inputEl = useRef(null);

  const [inputValue, setInputValue] = useState(value);
  const [isPristine, setIsPristine] = useState(true);
  const [displayError, setDisplayError] = useState(false);

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

  const { isValid, message: errorMessage } = validation;

  const handleInputChange = (event: any, name: string) => {
    event.persist();
    if (isPristine && event.target.value !== "") {
      setIsPristine(false);
    }
    setInputValue(event.target.value);
    onChange(event, name);
  };
  useEffect(() => {
    if (!isPristine) {
      const shouldShowError = !isValid && errorMessage;
      setDisplayError(shouldShowError);
    }
  }, [validation]);

  return (
    <div
      className={classnames(
        classes.container,
        className,
        "SmartInput",
        "SmartInput__container",
        `SmartInput--${name}`,
        {
          error: displayError,
        }
      )}
    >
      {label && <label className={classes.label}>{label}</label>}
      {type === "select" ? (
        <select
          value={inputValue}
          ref={inputEl}
          name={name}
          required={required}
          onChange={(e) => handleInputChange(e, name)}
          className={classnames(classes.select, {
            [classes.errorInput]: displayError,
          })}
        >
          {renderOptions(options)}
        </select>
      ) : (
        <input
          {...inputProps}
          ref={inputEl}
          placeholder={placeholder}
          value={inputValue}
          name={name}
          type={type}
          onChange={(e) => handleInputChange(e, name)}
          className={classnames(classes.input, {
            [classes.errorInput]: displayError,
          })}
          required={required}
        />
      )}
      <div
        className={classnames("HelpText", classes.helpText, {
          [classes.errorText]: displayError,
        })}
      >
        {displayError ? errorMessage : helpText}
      </div>
    </div>
  );
};

export default SmartInput;
