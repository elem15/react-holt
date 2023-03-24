import { useState } from "react";
import Pets from "./Pets";
import useBreeds from "../hooks/useBreeds";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/searchParamsSlice";
import { useSearchQuery } from "../redux/petApiService";
const animals = ["cat", "dog", "bird", "reptile", "pig"];

const SearchParams = ({ counter }) => {
  const dispatch = useDispatch();
  const [animal, setAnimal] = useState("");
  const petsParams = useSelector((state) => state.searchParams.value);
  const { data: pets, isLoading, refetch } = useSearchQuery(petsParams);
  const [currentBreeds] = useBreeds(animal);
  const adoptedPet = useSelector((state) => state.adoptedPet.value);
  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatch(
      add({
        animal: formData.get("animal") ?? "",
        location: formData.get("location") ?? "",
        breed: formData.get("breeds") ?? "",
      })
    );
  };
  return (
    <div className="search-params">
      <div>{counter}</div>
      <form onSubmit={handleSubmit}>
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Location"
          />
        </label>
        <label>
          Animals
          <select
            name="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option value=""></option>
            {animals.map((animal) => (
              <option name={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label>
          Breed
          <select name="breeds" disabled={!currentBreeds.length}>
            <option></option>
            {currentBreeds.map((breed) => (
              <option name={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
        <button onClick={refetch} className="button">
          Refresh
        </button>
      </form>
      <Pets pets={pets} />
    </div>
  );
};
export default SearchParams;
