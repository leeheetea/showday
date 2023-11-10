import React from "react";
import "../css/LaptopNavigator.css";
import StyledLink from "../components/styled";

const LaptopNavigator = () => {
  return (
    <div style={{ paddingTop: '80px' }} className="Laptopnavigator-container">
      <StyledLink to="/musical">
        <span className="Laptopnavigator-text">뮤지컬</span>
      </StyledLink>
      <StyledLink to="/concert">
        <span className="Laptopnavigator-text">콘서트</span>
      </StyledLink>
      <StyledLink to="/theatre">
        <span className="Laptopnavigator-text">연극</span>
      </StyledLink>
    </div>
  );
};

export default LaptopNavigator;
