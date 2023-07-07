import React from "react";
import "./OurJob.css";
export const OurJob = () => {
  return (
    // как варик можно закинуть каждый блок в див и сужать его вместо ебли с гридами
    <>
      <div className="block">
        <h2 className="title">как мы работаем</h2>
        <div className="OurJob">
          <div className="OurJob__block">
            <div className="block__image OurJob__image1 block__front"></div>
            <h3 className="block__title block__front">большой выбор</h3>
            <h4 className="block__subtitle block__front">
              навестите магазин или посмотрите на сайте нужные вам пластинки
            </h4>
          </div>
          <div className="OurJob__block">
            <div className="block__image OurJob__image2"></div>
            <h3 className="block__title block__front">большой выбор</h3>
            <h4 className="block__subtitle ">
              закажите сборку товара через сайт
            </h4>
          </div>
          <div className="OurJob__block">
            <div className="block__image OurJob__image3"></div>
            <h3 className="block__title">быстрая доставка</h3>
            <h4 className="block__subtitle">
              зайдите в магазин, чтобы забрать собранный для вас заказ
            </h4>
          </div>
        </div>
        <div className="Rectangle"></div>
      </div>
    </>
  );
};
