import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  const divRef = useRef(null);
  if (!divRef.current) {
    divRef.current = document.createElement('div');
  }
  useEffect(() => {
    const rootEl = document.getElementById('modal');
    rootEl.appendChild(divRef.current);
    return () => rootEl.removeChild(divRef.current);
  }, []);
  return (
    createPortal(<div>{children}</div>, divRef.current)
  );
};

export default Modal;