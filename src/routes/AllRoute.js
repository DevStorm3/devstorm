import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

// public component
export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} component={(props) => <Component {...props} />} />
);

// auth component
export const AuthRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <Route {...rest} component={(props) => <Component {...props} />} />
  ); 
};

// authenticated route
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
  console.log('isAuthenticated')
  return isAuthenticated ? (
    <Route {...rest} component={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/" />
  );
};

export const CommonRoute = ({ component: Component, ...rest }) => {
  const guestAuthenticated = useSelector((state) => state?.guest?.email);
  const userAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
  return (userAuthenticated || guestAuthenticated) ? (
    <Route {...rest} component={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/" />
  );
};

