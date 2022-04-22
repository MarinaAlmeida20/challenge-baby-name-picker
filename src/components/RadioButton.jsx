import React from "react";

const RadioButton = ({ name, sexFilter, setSexFilter }) => {
  return (
    <button
      style={{
        backgroundColor:
          sexFilter === "m"
            ? "rgba(148, 187, 233, 1)"
            : sexFilter === "f"
            ? "rgba(238, 174, 202, 1)"
            : "orange",
      }}
      onClick={() => setSexFilter(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default RadioButton;
