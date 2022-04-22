import React from "react";

const BabyName = ({ nameProp, handleNameClick }) => {
  const { name, sex } = nameProp;
  return (
    <p
      onClick={() => handleNameClick(nameProp)}
      style={{
        backgroundColor: sex === "m" ? "#a0cfee" : "#ffc6e5",
        color: sex === "m" ? "#387297" : "#9e135e",
        padding: "5px 10px",
        borderRadius: "3px",
      }}
    >
      {name}
    </p>
  );
};

export default BabyName;
