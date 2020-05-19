import React from "react";
import { Route } from "react-router-dom";

// import pages
import landingPage from "../components/pages/landingPage";
import loginPage from "../components/pages/loginPage";
import registerPage from "../components/pages/registerPage";

const Routes = () => {
  return (
    <Route>
      <Route exact path="/" component={landingPage} />
      <Route exact path="/login" component={loginPage} />
      <Route exact path="/register" component={registerPage} />
    </Route>
  );
};

export default Routes;
