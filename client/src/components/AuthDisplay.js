import React, { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

const AuthDisplay = () => {
  const [state, setState] = useContext(AuthContext);

  return (
    <p className="flex justify-center">
      <span className="break-all">{state.token}</span>
    </p>
  );
};
export default AuthDisplay;
