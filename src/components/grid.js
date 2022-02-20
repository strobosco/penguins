import * as React from "react";

import p1 from "../images/1.jpg";
import p2 from "../images/2.jpg";

const Grid = () => {
  return (
    <div className="grid">
      <figure className="grid-item" id="1">
        <img className="grid-img" src={p1} alt="p1" />
      </figure>
      <figure className="grid-item" id="2">
        <img className="grid-img" src={p2} alt="p2" />
      </figure>
    </div>
  );
};

export default Grid;
