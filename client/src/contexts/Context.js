import React, { useState, useEffect } from "react";

const Context = React.createContext([{}, () => {}]);

const ContextProvider = (props) => {
  const [state, setState] = useState(
    parseInt(localStorage.getItem("number")) || 0
  );
  useEffect(() => {
    localStorage.setItem("number", state);
  }, [setState, state]);
  return (
    <Context.Provider value={[state, setState]}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
