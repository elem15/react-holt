import { useState } from "react";
import Pets from './Pets';
import useBreeds from "../hooks/useBreeds";
import { useQuery } from '@tanstack/react-query';
import fetchPetsList from '../queries/fetchPetsList';
const animals = ["cat", "dog", "bird", "reptile", "pig"];

const SearchParams = ({ counter }) => {
  const [animal, setAnimal] = useState("");
  const [petsParams, setPetParams] = useState(['', '', '']);
  const [currentBreeds] = useBreeds(animal);
  const result = useQuery(['pets', ...petsParams], fetchPetsList);

  const pets = result?.data?.pets ?? [];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setPetParams([
      formData.get('animal') ?? '',
      formData.get('location') ?? '',
      formData.get('breeds') ?? ''
    ]);
  };
  return (
    <div className="search-params">
      <div>{counter}</div>
      <form onSubmit={handleSubmit}>
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
            name="animals"
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
          <select
            name="breeds"
            disabled={!currentBreeds.length}
          >
            <option></option>
            {currentBreeds.map((breed) => (
              <option name={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.length ?
        <Pets pets={pets} />
        : (
          <div className="loading-pane">
            <h2 className="loader">🌀</h2>
          </div>
        )
      }
    </div>
  );
};
export default SearchParams;
