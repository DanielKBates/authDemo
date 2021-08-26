import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { AuthContextProvider } from "./contexts/AuthContext";
import { ContextProvider } from "./contexts/Context";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <ContextProvider>
          <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </ContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
