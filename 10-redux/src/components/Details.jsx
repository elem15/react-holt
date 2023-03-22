import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { adopt } from "../redux/adoptedPetSlice";
import { useGetPetQuery } from "../redux/petApiService";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";

const Details = () => {
  const { id } = useParams();
  const { isLoading, data: pet } = useGetPetQuery(id);
  const [isModal, setModalStatus] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const renderModal = () => {
    setModalStatus(false);
  };

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  const adoptPet = () => {
    dispatch(adopt(pet));
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
