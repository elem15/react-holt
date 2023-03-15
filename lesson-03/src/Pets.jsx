import Pet from './Pet';

const Pets = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ?
        <h2>Pets not found</h2> :
        pets.map((pet) => (
          < Pet
            {...pet} //not good idea throw all data in component
            key={pet.id}
          />
        ))
      }
    </div>
  );
};

export default Pets;