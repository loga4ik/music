import React, { useEffect, useState } from "react";
import "./Catalog.css";
import { Card } from "../../LittleComponents/Card/Card";
export const Catalog = () => {
  const [counter, setCounter] = useState(1);
  const [arrayOfCardsClases1, setArray] = useState([
    "card0",
    "card1",
    "card2",
    "card3",
    "card4",
    "card5",
  ]);
  const tempArr = ["card0", "card1", "card2", "card3", "card4", "card5"];
  const leftClickHandler = () => {
    for (let index = 0; index < counter; index++) {
      let tempVariable = tempArr.shift();
      if (tempVariable !== undefined) tempArr.push(tempVariable);
      setCounter(counter + 1);
    }
    setArray(tempArr);
  };
  const rightClickHandler = () => {
    for (let index = 0; index < counter; index++) {
      let tempVariable = tempArr.shift();
      if (tempVariable !== undefined) tempArr.push(tempVariable);
      setCounter(counter - 1);
    }
    setArray(tempArr);
  };
  return (
    <div className="catalog">
      <h2 className="title">каталог</h2>
      <div className="firstBlock">
        <div className="arrowLeft arrow" onClick={leftClickHandler} />
        <div className="blockOfCards">
          <div className={`${arrayOfCardsClases1[0]} card`}>
            <Card
              imageName="image0"
              productName="название0"
              productPrice={99.9}
            />
          </div>
          <div className={`${arrayOfCardsClases1[1]} card`}>
            <Card
              imageName="image1"
              productName="название1"
              productPrice={99.9}
            />
          </div>
          <div className={`${arrayOfCardsClases1[2]} card`}>
            <Card
              imageName="image2"
              productName="название2"
              productPrice={99.9}
            />
          </div>
          <div className={`${arrayOfCardsClases1[3]} card`}>
            <Card
              imageName="image3"
              productName="название3"
              productPrice={99.9}
            />
          </div>
          <div className={`${arrayOfCardsClases1[4]} card`}>
            <Card
              imageName="image4"
              productName="название4"
              productPrice={99.9}
            />
          </div>
          <div className={`${arrayOfCardsClases1[5]} card`}>
            <Card
              imageName="image5"
              productName="название5"
              productPrice={99.9}
            />
          </div>
        </div>
        <div className="arrowRight arrow" onClick={rightClickHandler} />
      </div>
    </div>
  );
};
