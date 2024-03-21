import "./RequestForm.css";
import React, { useState, useContext } from "react";
import { ProviderContext } from "../../../Context/ProviderContext";
import axios from "axios";

export const RequestForm = () => {
  const token = "5942556224:AAH3mzIGkyDOwoaKJHs9TK-_z2hEqtmshik";
  const chat_id = "-1001840012532";
  const URI_API = `https://api.telegram.org/bot${token}/sendMessage`;
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [descriptopnValue, setDescriptionlValue] = useState("");

  const { chengeActive } = useContext(ProviderContext);

  const formSubmitHandler: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    let message = `<b>Сообщение с сайта!</b>\n`;
    message += `<b>Имя : ${nameValue}</b>\n`;
    message += `<b>Номер телефона : ${phoneValue}</b>\n`;
    message += `<b>Email : ${emailValue}</b>\n`;
    message += `<b>Дополнительно : ${descriptopnValue}</b>`;
    axios.post(URI_API, {
      chat_id: chat_id,
      parse_mode: "html",
      text: message,
    });
    chengeActive();
  };
  return (
    <div className="relative">
      <h2 className="title z-index">закажите или навестите наш магазин</h2>
      <form
        id="tgForm"
        action=""
        className="request--form"
        onSubmit={(e) => formSubmitHandler(e)}
      >
        <input
          className="request--form__input z-index"
          required
          type="text"
          name="name"
          placeholder="YOUR NAME"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
        <input
          className="request--form__input z-index"
          required
          type="text"
          name="phone"
          placeholder="PHONE"
          value={phoneValue}
          onChange={(e) => setPhoneValue(e.target.value)}
        />
        <input
          className="request--form__input z-index"
          required
          type="text"
          name="email"
          placeholder="EMAIL"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <input
          className="request--form__input request--form__description z-index"
          type="text"
          name="description"
          placeholder="DESCRIPTION"
          value={descriptopnValue}
          onChange={(e) => setDescriptionlValue(e.target.value)}
        />
        <input
          className="request--form__input request--form__button z-index"
          type="submit"
          value="ORDER"
        />
        <div className="music-record1" />
        <div className="music-record2" />
      </form>
    </div>
  );
};
