import React from "react";
import "./countryList.scss";

const CountryList = () => {
  return (
    <div className="country-list">
      <div className="country-list__sort"></div>
      <div className="country-list__result"></div>
      <div className="country-list__pagination"></div>
    </div>
  );
};

export default CountryList;
