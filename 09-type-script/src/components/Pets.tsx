import Pet from "./Pet";
import { Pet as PetType } from "../types/APIResponses";

const Pets = ({ pets }: { pets: PetType[] }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>Pets not found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            {...pet} //not good idea throw all data in component
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Pets;
