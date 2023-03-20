import React from "react";
import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, images, city, state, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) hero = images[0];
  return (
    <Link to={`/details/${id}`} className="relative block">
      <div>
        <img src={hero} alt={name} />
      </div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2">
        <h2>{name}</h2>
        <h3>
          {animal} - {breed} - {city}, {state}
        </h3>
      </div>
    </Link>
  );
};
export default Pet;
