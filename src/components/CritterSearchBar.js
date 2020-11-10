import React from "react";

const CritterSearchBar = (props) => {

    let { handleSearch } = props
  
    return (
    <div>
      <strong>Sort by: </strong>
      <label>
        <input
          type="checkbox"
          value="Alphabetically"
          checked={null}
          onChange={(e) => console.log(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="checkbox"
          value="Price"
          checked={null}
          onChange={(e) => console.log("I'm clicked!", e.target.value )}
        />
        Price
      </label>
      <br />
      <br />

      <label>
        <strong>Filter by Species: </strong>
        <select onChange={(e) => console.log(e.target.value)}>
          <option value="">All</option>
          
        </select>
      </label>
      <br />
      <br />
      <label>
        <strong>Filter by Personality: </strong>
        <select onChange={(e) => console.log(e.target.value)}>
          <option value="">All</option>
          
        </select>
      </label>
      <br />
      <br />

      <label>
        <strong>Search</strong>
        <div className="ui search">
          <div className="ui icon input">
            <input
              className="prompt"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <i className="search icon" />
          </div>
        </div>
      </label>
    </div>
  );
};

export default CritterSearchBar;