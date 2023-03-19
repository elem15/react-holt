/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, renderModal }) => {
  const divRef = useRef(null);
  if (!divRef.current) {
    divRef.current = document.createElement("div");
  }
  const handleClick = () => {
    renderModal();
  };
  const keydown = (e) => {
    if (e.key === "Escape") {
      renderModal();
    }
  };
  useEffect(() => {
    const rootEl = document.getElementById("modal");
    rootEl.appendChild(divRef.current);
    rootEl.addEventListener("click", () => handleClick());
    document.addEventListener("keydown", keydown, true);
    return () => {
      rootEl.removeChild(divRef.current);
      document.removeEventListener("keydown", keydown);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    createPortal(
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {children}
      </div>,
      divRef.current
    )
  );
};

export default Modal;
