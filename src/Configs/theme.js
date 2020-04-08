// @flow

type ClassType = {
  [property: string]: string,
};

export type Theme = {
  palette: {
    primaryColor: string,
    secondaryColor: string,
  },
  typography: {
    primaryFont: string,
    body: ClassType,
    label: ClassType,
  },
};

export const theme: Theme = {
  palette: {
    primaryColor: "rgb(28,62,148)",
    secondaryColor: "rgb(0,130,132)",
  },
  typography: {
    primaryFont: "Source Sans Pro, RobotoHelvetica, Arial, Sans-serif",
    body: {
      fontSize: "16px",
    },
    label: {
      display: "block",
      fontSize: "0.9em",
    },
  },
};

export default theme;
