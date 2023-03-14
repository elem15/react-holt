import React from "react";

const Pet = ({ name, animal, breed, id }) => {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
};
export default Pet;
