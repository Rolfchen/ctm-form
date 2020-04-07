// @flow

type ClassType = {
  [property: string]: string,
};

export type Theme = {
  typography: {
    primaryFont: string,
    body: ClassType,
    label: ClassType,
  },
};

export const theme: Theme = {
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
