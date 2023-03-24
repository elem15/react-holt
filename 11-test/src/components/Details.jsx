import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdoptPetContext from "../AdoptPetContext";
import fetchPet from "../queries/fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";

const Details = () => {
  const { id } = useParams();
  const result = useQuery(["details", id], fetchPet);
  const [isModal, setModalStatus] = useState(false);
  const [, setAdoptPet] = useContext(AdoptPetContext);
  const navigate = useNavigate();
  const renderModal = () => {
    setModalStatus(false);
  };
  // these error handling don't work in this case with useQuery. Only Error boundary help!
  if (result.isError) {
    return <div className="error">Some loading error</div>;
  }
  if (result.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  const [pet] = result.data.pets;
  const adoptPet = () => {
    setAdoptPet(pet);
    navigate("/");
  };
  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button onClick={() => setModalStatus(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
      {isModal ? (
        <Modal renderModal={renderModal}>
          <h2>Would you like to adopt {pet.name}?</h2>
          <div className="buttons">
            <button onClick={adoptPet}>Yes</button>
            <button onClick={() => setModalStatus(false)}>No</button>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
export default DetailsErrorBoundary;
