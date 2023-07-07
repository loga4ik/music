import React, { FC } from "react";
import "./Card.css";
import { Button } from "../Button/Button";

interface CardProps {
  imageName: string;
  productName: string;
  productPrice: number;
}

export const Card:FC<CardProps> = ({imageName, productName, productPrice}) => {
  return (
    <>
    {/* <style></style> */}
    <div className="ProductCard">
      <ul className="CardList">
        <li className={`${imageName} Card__image`}></li>
        <li className="Card__name">{productName}</li>
        <li className="Card__price">{productPrice} $</li>
        <Button text={"заказать"}/>
      </ul>
    </div>
    </>
  );
};
