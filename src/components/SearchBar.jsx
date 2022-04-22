import React, { useState } from "react";
import "./SearchBar.css";
import NameContainer from "./NameContainer";

function SearchBar({ placeholder, babyNames }) {
  const [wordEntered, setWordEntered] = useState("");
  const [favourites, setFavourites] = useState([]);

  const handleAddNameToFavourites = (clickedName) => {
    setFavourites([...favourites, clickedName]);
  };

  const handleRemoveNameFromFavourites = (clickedName) => {
    setFavourites(
      favourites.filter((fave) => {
        if (fave.id === clickedName.id) {
          return false;
        } else {
          return true;
        }
      })
    );
  };

  const sortedAndFilteredBabyNames = babyNames
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((nameObj) => {
      const { name, id } = nameObj;
      const wordEnteredIsInName = name
        .toLowerCase()
        .includes(wordEntered.toLowerCase());

      const favouriteIds = favourites.map((name) => name.id); // array of IDs
      const isSelectedAsFavourite = favouriteIds.includes(id); // remove the name from the list and put in favourites

      return wordEnteredIsInName && !isSelectedAsFavourite;
    });

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={(event) => setWordEntered(event.target.value)}
        />
        <div>
          <button
            onClick={() => {
              console.log("clicked All");
              babyNames.map((value, key) => {
                console.log(value.name);
              });
            }}
          >
            <span>All</span>
          </button>
          <button
            onClick={() => {
              console.log("clicked Girls");
              babyNames.map((value, key) => {
                console.log(value.sex === "f" && value.name);
              });
            }}
          >
            <span>Girls</span>
          </button>
          <button
            onClick={() => {
              console.log("clicked Boys");
              babyNames.map((value, key) => {
                console.log(value.sex === "m" && value.name);
              });
            }}
          >
            <span>Boys</span>
          </button>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        FAVOURITES:
        <NameContainer
          content={favourites}
          handleClick={handleRemoveNameFromFavourites}
        />
        <div className="line"></div>
        <NameContainer
          content={sortedAndFilteredBabyNames}
          handleClick={handleAddNameToFavourites}
        />
      </div>
    </div>
  );
}

export default SearchBar;
