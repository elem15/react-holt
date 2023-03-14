import { useRef, useState } from "react";
const SearchParams = ({ counter }) => {
  const [location, setLocation] = useState("Seattle, WA");
  const unControl = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(location)
    console.log(unControl.current.value)
    console.log(e.target.email.value)
  }
  return (
    <div className="search-params">
      <div>{counter}</div>
      <form onSubmit={handleSubmit}>
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
        <label >
          Uncontrolled
          <input type="text" ref={unControl} />
        </label>
        <label >
          Uncontrolled++
          <input type="text" name='email' />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
