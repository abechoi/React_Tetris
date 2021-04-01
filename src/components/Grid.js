import React, { useContext } from "react";
import { Context } from "../contexts/Context";

const Grid = () => {
  const { blocks } = useContext(Context);

  return <div className="Grid">{blocks}</div>;
};

export default Grid;
