import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import Stargazers from "./pages/Stargazers";
import { MainTheme, GlobalStyles } from "./theme/theme";
import reportWebVitals from "./utilities/reportWebVitals";
import { client } from "./gql/client";
import { StarGazingConsumer } from "./context/Stargazing";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <StarGazingConsumer>
          <ThemeProvider theme={MainTheme}>
            <GlobalStyles />
            <Stargazers />
          </ThemeProvider>
        </StarGazingConsumer>
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

console.log(
  "Dear evaluation team, please find some useful information about the application in this log: "
);
reportWebVitals(console.log);
