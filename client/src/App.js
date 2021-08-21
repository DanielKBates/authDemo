import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";

import { ContextProvider } from "./contexts/Context";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </ContextProvider>
    </Router>
  );
}

export default App;
