import React from "react";

const Pet = ({ name, animal, breed, images, city, state, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) hero = images[0];
  return (
    <a href={`/details/${id}`} className='pet'>
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className='info'>
        <h2>{name}</h2>
        <h3>{animal} - {breed} - {city}, {state}</h3>
      </div>
    </a>
  );
};
export default Pet;
