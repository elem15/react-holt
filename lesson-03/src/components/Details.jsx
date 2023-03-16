import { useQuery } from "@tanstack/react-query";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import fetchPet from "../queries/fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from './ErrorBoundary';
import Modal from './Modal';

const Details = () => {
  const { id } = useParams();
  const result = useQuery(["details", id], fetchPet);
  const [isModal, setModalStatus] = useState(false);
  const renderModal = () => {
    setModalStatus(true);
    console.log('modal');
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
  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button onClick={() => setModalStatus(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
      {isModal ?
        <Modal>
          <h2>Modal</h2>
          <button onClick={() => setModalStatus(false)}>close</button>
        </Modal>
        : ''}
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
