import React from "react";
import Block from "./Block";

const Grid = () => {
  const blocks = Array.from(Array(200), (_, i) => <Block key={i} />);

  return <div className="Grid">{blocks}</div>;
};

export default Grid;
