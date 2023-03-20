import Pet from "./Pet";

const Pets = ({ pets }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
