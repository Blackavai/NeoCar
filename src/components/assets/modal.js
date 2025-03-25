import React from "react";
import "../styles/modal.css";
import Reg from '../pages/reg';
import Log from '../pages/log';
import { useState } from "react";

const Modal = ({active, setActive, onUserData}) => {

    const [isRegistrationActive, setRegistrationActive] = useState(true);

    const handleModalClick = (e) => {
      e.stopPropagation();
    };
  
    const switchModal = () => {
      setRegistrationActive(!isRegistrationActive);
    };

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal_content active" : "modal"} onClick={e => e.stopPropagation()}>
                {isRegistrationActive ? <Reg switchModal={switchModal}/> : <Log switchModal={switchModal} onUserData={onUserData}/>}
            </div>
        </div>
    );
};

export default Modal;