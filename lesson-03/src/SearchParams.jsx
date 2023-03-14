import { useState } from "react";
const SearchParams = ({ counter }) => {
  const [location, setLocation] = useState("Seattle, WA");

  return (
    <div className="search-params">
      <div>{counter}</div>
      <form>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </label>
      </form>
    </div>
  );
};
export default SearchParams;
