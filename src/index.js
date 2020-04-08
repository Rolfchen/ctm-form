// import React from "react";

// const appContainer = document.getElementById("root");
// if (appContainer !== null) {
//   render(
//     <ThemeProvider theme={theme}>
//       <App />
//     </ThemeProvider>,
//     appContainer
//   );
// }

// @flow

import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "react-jss";
import { theme } from "./Configs/theme";
import App from "./App";

export type MountForm = (domId?: string) => void;

export const mountForm: MountForm = (domId = "root") => {
  const appContainer = document.getElementById(domId);
  if (appContainer !== null) {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
      appContainer
    );
  }
};
