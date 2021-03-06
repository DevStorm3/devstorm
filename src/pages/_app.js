import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { apollo } from "../graphql";
import { store } from "../store";
import { Provider } from "react-redux";
import AppRouter from "../routes";
import Cookie from "js-cookie";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";
import "../styles/index.scss";

// production

//test
// const stripePromise = loadStripe("pk_test_mTbz95I1kySBRX0yUeWKQPYR00tF3MUeFG");

try {
  // Create the Performance Observer instance.
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const fid = entry.processingStart - entry.startTime;
      console.log("FID:", fid);
    }
  });

  // Start observing first-input entries.
  observer.observe({
    type: "first-input",
    buffered: true,
  });
  Cookie.set("user", "brainiacs-ez");
} catch (e) {
  console.log(e);
  // Do nothing if the browser doesn't support this API.
}

const CustomApp = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={apollo}>
        <AppRouter />
      </ApolloProvider>
    </Provider>
  );
};

export default CustomApp;
