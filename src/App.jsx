// @flow

import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import classnames from "classnames";
import { createUseStyles, useTheme } from "react-jss";
import { UserAddress, UserDetails } from "./Screens";

import type { Theme } from "./Configs/theme";

const useStyles: any = createUseStyles((theme: Theme) => ({
  body: {
    ...theme.typography.body,
    fontFamily: theme.typography.primaryFont,
  },
}));

export const App = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <BrowserRouter>
      <div className={classnames("MainApp", classes.body)}>
        <h1>CTM Form</h1>
        <Switch>
          <Route exact path="/">
            <UserDetails />
          </Route>
          <Route exact path="/address">
            <UserAddress />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
