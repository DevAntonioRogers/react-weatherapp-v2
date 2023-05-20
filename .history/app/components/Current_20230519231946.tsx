import React from "react";

const Current = ({ data }) => {
  return <div className="location-name">{data.location ? <h1>{data.location.name}</h1> : null}</div>;
};

export default Current;
