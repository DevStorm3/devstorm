import React from "react";
import { createBrowserHistory } from "history";
import { Switch, Router } from "react-router-dom";

// Index Routes
import { Auth, Private, Public } from "./Router";
import { AuthRoute, PrivateRoute, PublicRoute } from "./AllRoute";
import { Footer, Header } from "../containers";
import { Socialbar } from "../components";
// import { NotFound } from "../pages";
// Routes

// Components
export const history = createBrowserHistory();

const RouterConfig = () => {
  return (
    <Router history={history}>
      <Header/>
      <Socialbar/>
      <Switch>
        {Private.map((R, k) => {
          return <PrivateRoute key={k} {...R} />;
        })}
        {Auth.map((R, k) => {
          return <AuthRoute key={k} {...R} />;
        })}
        {/* <Route component={Error} /> */}

        {Public.map((R, k) => {
          return <PublicRoute key={k} {...R} />;
        })}
        {/* <Route component={NotFound} /> */}
      </Switch>
      <Footer/>
      <a id="back-to-top" href="#" className="show"
      ><i className="flaticon-up-arrow"></i
    ></a>
    </Router>
  );
};

export const AppRouter = RouterConfig;
