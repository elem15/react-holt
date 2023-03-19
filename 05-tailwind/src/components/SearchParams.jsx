import { useContext, useState } from "react";
import Pets from "./Pets";
import useBreeds from "../hooks/useBreeds";
import { useQuery } from "@tanstack/react-query";
import fetchPetsList from "../queries/fetchPetsList";
import AdoptPetContext from "../AdoptPetContext";
const animals = ["cat", "dog", "bird", "reptile", "pig"];

const SearchParams = () => {
  const [animal, setAnimal] = useState("");
  const [petsParams, setPetParams] = useState({
    animal: "",
    location: "",
    breed: "",
  });
  const [currentBreeds] = useBreeds(animal);
  const result = useQuery(["pets", petsParams], fetchPetsList);
  const [adoptedPet] = useContext(AdoptPetContext);
  const pets = result?.data?.pets ?? [];
  if (result.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setPetParams({
      animal: formData.get("animal") ?? "",
      location: formData.get("location") ?? "",
      breed: formData.get("breeds") ?? "",
    });
  };
  return (
    <div className="my-0 mx-auto w-11/12">
      <form
        className="mb-10 flex flex-col items-center justify-center rounded-lg bg-gray-200 p-10 shadow-lg"
        onSubmit={handleSubmit}
      >
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
            className="search-input"
          />
        </label>
        <label>
          Animals
          <select
            name="animal"
            className="search-input"
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
            className="grayed-out-disabled search-input"
          >
            <option></option>
            {currentBreeds.map((breed) => (
              <option name={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button className="rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50">
          Submit
        </button>
      </form>
      <Pets pets={pets} />
    </div>
  );
};
export default SearchParams;
