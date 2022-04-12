import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopDetail from "./page/site/ShopDetail/ShopDetail";
import ShoppingCart from "./page/site/ShoppingCart/ShoppingCart";
import Signup from "./page/site/signup/SignUp";
import Login from "./page/site/login/LogIn";
import Loading from "./components/Loading/Loading";
import Header from "./components/Header/header";

ReactDOM.render(
  <>
    <Router>
      <Suspense fallback={<Loading />}>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/shop/checkout" component={ShoppingCart} />
          <Route
            exact
            path="./src/page/site/ShopDetail"
            component={ShopDetail}
          />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signup" component={Login} />
          {/* <Route path="/*" component={PageNotFound} /> */}
        </Switch>
      </Suspense>
    </Router>
  </>,
  document.getElementById("root")
);
