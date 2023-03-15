import { useState } from "react";
import Pets from './Pets';
import useBreeds from "../hooks/useBreeds";
import { useQuery } from '@tanstack/react-query';
import fetchPetsList from '../queries/fetchPetsList';
const animals = ["cat", "dog", "bird", "reptile", "pig"];

const SearchParams = ({ counter }) => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [petsParams, setPetParams] = useState(['', '', '']);
  const [currentBreeds] = useBreeds(animal);
  const result = useQuery(['pets', ...petsParams], fetchPetsList);

  const pets = result?.data?.pets ?? [];

  const handleSubmit = (e) => {
    e.preventDefault();
    setPetParams([animal, location, breed]);
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
            value={location}
            placeholder="Location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </label>
        <label>
          Animals
          <select
            name="animals"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
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
            value={breed}
            disabled={!currentBreeds.length}
            onChange={(e) => setBreed(e.target.value)}
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
