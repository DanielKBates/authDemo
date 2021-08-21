import React, { useContext } from "react";

import { Context } from "../contexts/Context";

const ContextChanger = () => {
  const [state, setState] = useContext(Context);
  return (
    <div className="flex flex-col md:flex-row justify-center space-x-3">
      <button
        className="bg-blue-500 md:bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setState((state) => state + 1)}
      >
        Add one to context
      </button>
      <button
        className="bg-blue-500 md:bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={ ()=>setState(0)}
      >
        Clear Context
      </button>
    </div>
  );
};

export default ContextChanger;
