// @flow

import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import classnames from "classnames";
import { createUseStyles, useTheme } from "react-jss";
import { UserAddress, UserDetails } from "./Screens";

import type { Theme } from "./Configs/theme";

type ClassType = {
  body: string,
};

const useStyles: any = createUseStyles((theme: Theme) => ({
  body: {
    fontFamily: theme.typography.primaryFont,
  },
}));

export const App = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classnames("MainApp", classes.body)}>
      <h1>CTM Form</h1>
      <BrowserRouter>
        <Route path="/" exact component={UserDetails} />
        <Route path="/details" exact component={UserDetails} />
        <Route path="/address" exact component={UserAddress} />
      </BrowserRouter>
    </div>
  );
};

export default App;
