import { FormEvent, useState } from "react";
import Pets from "./Pets";
import useBreeds from "../hooks/useBreeds";
import { Animal } from "../types/APIResponses";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { add } from "../redux/searchParamsSlice";
import { useSearchQuery } from "../redux/petApiService";

const ANIMALS: Animal[] = ["cat", "dog", "bird", "reptile", "pig"];

const SearchParams = () => {
  const [animal, setAnimal] = useState("" as Animal);
  const petsParams = useSelector(
    (state: RootState) => state.searchParams.value
  );
  const dispatch = useDispatch();

  const [currentBreeds] = useBreeds(animal);
  const { data, isLoading } = useSearchQuery(petsParams);
  const pets = data ? data : [];
  const adoptedPet = useSelector((state: RootState) => state.adoptedPet.value);
  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    dispatch(
      add({
        animal: formData.get("animal")?.toString() ?? "",
        location: formData.get("location")?.toString() ?? "",
        breed: formData.get("breeds")?.toString() ?? "",
      })
    );
  };
  return (
    <div className="search-params">
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
            onChange={(e: FormEvent<HTMLSelectElement>) => {
              const value = e.currentTarget.value as Animal;
              setAnimal(value);
            }}
          >
            <option value=""></option>
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
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
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Pets pets={pets} />
    </div>
  );
};
export default SearchParams;
