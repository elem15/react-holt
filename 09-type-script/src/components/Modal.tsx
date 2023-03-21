/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRef, useEffect, MutableRefObject, ReactElement } from "react";
import { createPortal } from "react-dom";
interface IProps {
  children: ReactElement;
  renderModal: () => void;
}
const Modal = ({ children, renderModal }: IProps) => {
  const divRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!divRef.current) {
    divRef.current = document.createElement("div");
  }
  const handleClick = () => {
    renderModal();
  };
  useEffect(() => {
    const rootEl = document.getElementById("modal");
    if (!rootEl || !divRef.current) {
      return;
    }
    rootEl.appendChild(divRef.current);
    rootEl.addEventListener("click", () => handleClick());
    return () => {
      if (divRef.current) rootEl.removeChild(divRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return createPortal(
    <div
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      {children}
    </div>,
    divRef.current
  );
};

export default Modal;
