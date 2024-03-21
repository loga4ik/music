import React from "react";
import "./advertising.css";
import { Button } from "../../LittleComponents/Button/Button";
export const Advertising = () => {
  return (
    <div className="add">
      <div className="add__wrapper">
        <div className="description--side">
          <h2 className="add__title">LIGHT VINIL</h2>
          <h3 className="add__subtitle">магазин винила</h3>
          <p className="add__description">
            виниловые пластинки - это не просто источник звука, а настоящее
            произведение искусства.
          </p>
          <div className="add__button">
            <Button text="в каталог" />
          </div>
        </div>
      </div>
    </div>
  );
};
