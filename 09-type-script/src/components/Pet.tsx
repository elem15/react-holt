import { Link } from "react-router-dom";
import { Pet as PetType } from "../types/APIResponses";

const Pet = ({ name, animal, breed, images, city, state, id }: PetType) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) hero = images[0];
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <h3>
          {animal} - {breed} - {city}, {state}
        </h3>
      </div>
    </Link>
  );
};
export default Pet;
