import React from "react";
import BabyName from "./BabyName";

const NameContainer = ({ content, handleClick }) => {
  return (
    <div className="dataResult">
      {content.map((nameObj) => {
        return (
          <div className="dataItem">
            <BabyName nameProp={nameObj} handleNameClick={handleClick} />
          </div>
        );
      })}
    </div>
  );
};

export default NameContainer;
