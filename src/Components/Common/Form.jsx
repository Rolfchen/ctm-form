// @flow

import * as React from "react";
import classnames from "classnames";
import { createUseStyles, useTheme } from "react-jss";
import type { Theme } from "../../Configs/theme";

const useStyles: any = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
}));
type Props = {
  name: string,
  children?: React.Node,
  className?: string,
};

export const Form = ({ name, children, className, ...props }: Props) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <form
      {...props}
      name={name}
      className={classnames(className, classes.container)}
    >
      {children}
    </form>
  );
};

export default Form;
