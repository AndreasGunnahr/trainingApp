import React from "react";
import { Route } from "react-router-dom";

// import pages
import LandingPage from "../components/pages/landingPage";
import LoginPage from "../components/pages/loginPage";
import RegisterPage from "../components/pages/registerPage";
import DashboardPage from "../components/pages/registerPage";

const Routes = () => {
  return (
    <Route>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      {/* Dashboard borde gå till "/" också ifall man är inloggad */}
      <Route exact path="/dashboard" component={DashboardPage} />
    </Route>
  );
};

export default Routes;
