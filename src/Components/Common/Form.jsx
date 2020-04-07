// @flow

import * as React from "react";

type Props = {
  children?: React.Node,
};

export const Form = ({ children, ...props }: Props) => {
  return <form {...props}>{children}</form>;
};

export default Form;
