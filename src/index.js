import React from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";

import App from "./App";

const GlobalStyle = createGlobalStyle`
  img{
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  p{
    margin: 0;
    padding: 0;
  }

  .link{
    display: block;
    text-decoration: none;
    color: ${(props) => props.theme.colors.primaryTextColor};
}

`;

const theme = {
  colors: {
    primaryBgColor: "#F2F2F2",
    secondaryBgColor: "#191919",
    thirdBgColor: "#EEEEEE",
    fourthBgColor: "#E4E4E4",

    primaryTextColor: "#FFFFFF",
    secondaryTextColor: "#474040",
    thirdTextColor: "#424242",
    fourthTextColor: "#BCBCBC",
    fifthTextColor: "#645F5F",
    sixthTextColor: "#787878",
  },
  fonts: {
    primary: "Montserrat, sans-serif",
    secondary: "Arial, sans-serif",
  },
  fontWeight: {
    light: 300,
    normal: 400,
    bold: 700,
  },
};

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
