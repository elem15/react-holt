import { useEffect, useRef, useState } from "react";
import Pet from './Pet';
const animals = ['cat', 'dog', 'bird', 'reptile', 'pig']
const breeds = {
  cat: ['maine-coon', 'persian'],
  dog: ['sheep-dog', 'pudel', 'Havanese', 'Dalmation', 'Labrador']
}
const SearchParams = ({ counter }) => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState('')
  const [breed, setBreed] = useState('')
  const [currentBreeds, setCurrentBreeds] = useState([])
  const [pets, setPets] = useState([])
  const unControl = useRef()
  useEffect(() => {
    requestPets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(location)
    console.log(unControl.current.value)
    console.log(e.target.email.value)
    requestPets()
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
        <label>
          Animals
          <select name="animals" value={animal}
            onChange={(e) => {
              setAnimal(e.target.value)
              setBreed('')
              setCurrentBreeds(breeds[e.target.value] ? breeds[e.target.value] : [])
            }}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option value=""></option>
            {animals.map(animal => (
              <option name={animal} key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label>
          Breed
          <select name="breeds" value={breed} disabled={!currentBreeds.length} onChange={e => setBreed(e.target.value)}
          >
            <option></option>
            {currentBreeds.map(breed => (
              <option name={breed} key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pets) => (
        <Pet name={pets.name} breed={pets.breed} animal={pets.animal} key={pets.name} />
      ))
      }


    </div>
  );
};
export default SearchParams;
