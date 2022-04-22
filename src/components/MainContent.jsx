import React, { useState } from "react";
import "./SearchBar.css";
import NameContainer from "./NameContainer";
import RadioButton from "./RadioButton";

function MainContent({ placeholder, babyNames }) {
  const [wordEntered, setWordEntered] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [sexFilter, setSexFilter] = useState("all");

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
      const { name, id, sex } = nameObj;
      const wordEnteredIsInName = name
        .toLowerCase()
        .includes(wordEntered.toLowerCase());

      const favouriteIds = favourites.map((name) => name.id); // array of IDs
      const isSelectedAsFavourite = favouriteIds.includes(id); // remove the name from the list and put in favourites

      const sexMatchesSelectedSex = sexFilter === "all" || sexFilter === sex;

      return (
        wordEnteredIsInName && !isSelectedAsFavourite && sexMatchesSelectedSex
      );
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
        <RadioButton
          name="all"
          setSexFilter={setSexFilter}
          sexFilter={sexFilter}
        />
        <RadioButton
          name="f"
          setSexFilter={setSexFilter}
          sexFilter={sexFilter}
        />
        <RadioButton
          name="m"
          setSexFilter={setSexFilter}
          sexFilter={sexFilter}
        />
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

export default MainContent;
