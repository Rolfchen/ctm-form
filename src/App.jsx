// @flow

import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import classnames from "classnames";
import { createUseStyles, useTheme } from "react-jss";
import { UserAddress, UserDetails, SubmissionResult } from "./Screens";
import { UserProvider } from "./Context/UserProvider";
import { ProgressBar } from "./Components/Common";

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
      <UserProvider>
        <div className={classnames("MainApp", classes.body)}>
          <h1>CTM Form</h1>
          <h2>Free Quotation!</h2>
          <ProgressBar />
          <Switch>
            <Route exact path="/">
              <UserDetails />
            </Route>
            <Route exact path="/address">
              <UserAddress />
            </Route>
            <Route exact path="/result">
              <SubmissionResult />
            </Route>
          </Switch>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
