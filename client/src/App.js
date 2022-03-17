import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./views/Auth";
import './App.css';
import Landing from "./components/layout/Landing";
import  AuthContextProvider  from "./contexts/AuthContext";


function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route exact path="*" element={<Landing />} />
          <Route exact path="login" element={<Auth authRoute="login"/>} />
          <Route exact path="register" element={<Auth authRoute="register"/>} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
