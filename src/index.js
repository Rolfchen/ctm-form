import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "react-jss";
import { theme } from "./Configs/theme";
import App from "./App";

const appContainer = document.getElementById("root");
if (appContainer !== null) {
  render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    appContainer
  );
}
