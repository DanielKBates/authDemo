import React, { useContext } from "react";

import { Context } from "../contexts/Context";

const Display = () => {
  const [number, setnumber] = useContext(Context);
  return (
    <p className="flex justify-center">
      <span className="bg-gradient-to-b from-yellow-400 to-red-500 text-transparent bg-clip-text text-9xl">
        {number}
      </span>
    </p>
  );
};

export default Display;
