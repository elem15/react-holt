import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, renderModal }) => {
  const divRef = useRef(null);
  if (!divRef.current) {
    divRef.current = document.createElement('div');
  }
  const handleClick = () => {
    renderModal();
  };
  useEffect(() => {
    const rootEl = document.getElementById('modal');
    rootEl.appendChild(divRef.current);
    rootEl.addEventListener('click', () => handleClick());
    return () => rootEl.removeChild(divRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    createPortal(<div onClick={(event) => { event.stopPropagation(); }}>{children}</div>, divRef.current)
  );
};

export default Modal;