import React from "react";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../context";
const Modal = () => {
   const {isModalOpen,closeModal} = useContext(AppContext) 
  return (
    <div className={`${isModalOpen?"modal modal-opened" : "modal"}`}>
      <div className="modal-container">
        <div className="modal-header">
          <button onClick={closeModal}><FaTimes /></button>
        </div>
        <div className="modal-body">This is modal</div>
      </div>
    </div>
  );
};

export default Modal;
