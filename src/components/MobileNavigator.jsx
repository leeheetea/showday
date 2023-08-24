import React from "react";
import { GiMusicalNotes } from "react-icons/gi";
import img1 from "../img/mike.png";
import { MdEventSeat } from "react-icons/md";
import "../css/MobileNavigator.css";
import StyledLink from "../components/styled";

const MobileNavigator = () => {
  return (
    <>
      <div className="navigator-container">
        <div className="navigator-item-container">
          <StyledLink to="/musical">
            <div className="navigator-icon">
              <GiMusicalNotes size="40" color="blue" />
            </div>
            <span className="navigator-text">뮤지컬</span>
          </StyledLink>
        </div>
        <div className="navigator-item-container">
          <StyledLink to="/concert">
            <div className="navigator-icon">
              <img width="45rem" src={img1} alt=""></img>
            </div>
            <span className="navigator-text">콘서트</span>
          </StyledLink>
        </div>
        <div className="navigator-item-container">
          <StyledLink to="/theatre">
            <div className="navigator-icon">
              <MdEventSeat size="45" color="rgba(128, 0, 128, 0.7)" />
            </div>
            <span className="navigator-text">연극</span>
          </StyledLink>
        </div>
      </div>
    </>
  );
};

export default MobileNavigator;
