// @flow

type ClassType = {
  [property: string]: string | ClassType,
};

const primaryColor = "rgb(28,62,148)";
const secondaryColor = "rgb(0,130,132)";

export type Theme = {
  palette: {
    primaryColor: string,
    secondaryColor: string,
  },
  typography: {
    primaryFont: string,
  },
  elements: {
    body: ClassType,
    label: ClassType,
    input: ClassType,
    button: ClassType,
    buttonDisabled: ClassType,
    select: ClassType,
  },
};

export const theme: Theme = {
  palette: {
    primaryColor,
    secondaryColor,
  },
  typography: {
    primaryFont: "Source Sans Pro, RobotoHelvetica, Arial, Sans-serif",
  },
  elements: {
    body: {
      fontSize: "16px",
    },
    label: {
      display: "block",
      fontSize: "0.9em",
    },
    input: {
      padding: "5px 10px",
      fontSize: "1.1em",
      border: `1px solid #ccc`,
    },
    select: {
      padding: "5px 10px",
      height: "35px",
      minWidth: "120px",
      fontSize: "1.1em",
      border: `1px solid #ccc`,
    },
    button: {
      padding: "5px 10px",
      fontSize: "1.1em",
      background: "white",
      border: `1px solid ${primaryColor}`,
      color: primaryColor,
      cursor: "pointer",
      marginRight: "6px",
      "&:hover": {
        background: primaryColor,
        color: "white",
      },
    },
    buttonDisabled: {
      padding: "5px 10px",
      fontSize: "1.1em",
      border: `1px solid #ddd`,
      background: "white",
      color: "#ddd",
      marginRight: "6px",
      "&:hover": {
        background: "white",
        color: "#ddd",
      },
    },
  },
};

export default theme;
