import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const modalRef = useRef(null);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return isVisible
    ? ReactDOM.createPortal(
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white shadow-lg rounded-md max-w-4xl w-full max-h-full overflow-auto">
            <div className="p-4">{children}</div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
