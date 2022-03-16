import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SiteLayout from "./components/layout/site/SiteLayout";
import Login from "./components/page/site/login/LogIn";
import Signup from "./components/page/site/signup/SignUp";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="*" element={<SiteLayout />} />
          <Route path="login" element={<Login />}/>
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
