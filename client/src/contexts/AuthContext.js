import React, { useState, useEffect } from "react";

const AuthContext = React.createContext([{}, () => {}]);

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] =
    useState(JSON.parse(localStorage.getItem("profile")) || {})
  ;

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("profile", JSON.stringify(currentUser));
    }
  }, [currentUser, setCurrentUser]);
  return (
    <AuthContext.Provider value={[currentUser, setCurrentUser]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext}