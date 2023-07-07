import React, { useContext } from "react";
import { ProviderContext } from "../../../Context/ProviderContext";
import "./PopUP.css";

export const PopUp = () => {
  const { active, chengeActive } = useContext(ProviderContext);

  const switchModal = () => {
    // setModalState(!modalState);
    chengeActive();
    console.log(active && "hide");
  };

  return (
    <section className={`popupSection ${active && "hide"}`}>
      <div className="popup">
        <div className="music-record1 popup__record1" />
        <div className="popup__record2 music-record2" />
        <div className="logo--elem">
          <div className="logo--elem__logo"></div>
          <div className="logo__title">Light Vinil</div>
        </div>
        <div className="popup__div">
          <h3 className="title popup__title">спасибо за заказ!</h3>
          <div className="description--modal">
            <p className="title popup__description">
              наш менеджер свяжется с вами для подтверждения заказа
            </p>
          </div>
        </div>
        <button className="popup__button" onClick={switchModal}>
          закрыть
        </button>
        <div className="kittenImg"></div>
      </div>
    </section>
  );
};
