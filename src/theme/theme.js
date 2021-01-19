import { createGlobalStyle } from "styled-components";

export const MainTheme = {
  space: [
    "0px",
    "4px",
    "8px",
    "16px",
    "32px",
    "64px",
    "128px",
    "256px",
    "512px",
  ],
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Roboto, system-ui, sans-serif",
    monospace: '"Roboto Mono", monospace',
  },
  fontSizes: [
    "12px",
    "14px",
    "16px",
    "20px",
    "24px",
    "32px",
    "48px",
    "64px",
    "96px",
  ],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "white",
    background: "#fff",
    primary: "#1a73e8",
    secondary: "#9c27b0",
    muted: "#f1f3f4",
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fonts.body};
    margin: 0;
  }
`;
