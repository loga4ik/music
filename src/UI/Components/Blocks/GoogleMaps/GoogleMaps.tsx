import React from "react";
import "./GoogleMaps.css";
export const GoogleMaps = () => {
  return (
    <>
      {/* <div>GoogleMaps</div> */}
      <div className="mapFrame">
        <iframe
          className="googleMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48483.33805171293!2d30.281779233715987!3d59.951407879945926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696312d956bc111%3A0x3a60c856823f306d!2z0KDQsNC00LjQvtGC0LXRhdC90LjRh9C10YHQutC40Lkg0JrQvtC70LvQtdC00LY!5e0!3m2!1sru!2sru!4v1689015021612!5m2!1sru!2sru"
          loading="lazy"
        />
      </div>
    </>
  );
};
