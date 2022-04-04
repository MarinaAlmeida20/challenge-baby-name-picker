import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState(data);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;

    setWordEntered(searchWord);

    const newFilter = data
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
      });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  function clearInput() {
    setFilteredData([]);
    setWordEntered("");
    // window.location.reload();
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      <div className="dataResult">
        {filteredData
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((value, key) => {
            return (
              <div className="dataItem" key={key}>
                <p
                  style={{
                    backgroundColor: value.sex === "m" ? "#a0cfee" : "#ffc6e5",
                    color: value.sex === "m" ? "#387297" : "#9e135e",
                    padding: "5px 10px",
                    borderRadius: "3px",
                  }}
                >
                  {value.name}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SearchBar;
