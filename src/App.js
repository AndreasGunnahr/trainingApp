import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "./theme/theme";
import Routes from "./routes/routes";
// import firebase from "./cloud/firebase";

const App = () => {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
