import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const ServiceCenterMainContainer = styled.div`
  background: rgb(246, 246, 246);
  padding: 80px;
  padding-top: 160px;
`;
export const ServiceCenterContainer = styled.div`
  background: white;
  width: 1120px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid black;
  text-align: center;
  margin: 0 auto;

  .serviceCenterTitle {
    color: white;
    background: rgb(49, 49, 49);
    width: 15rem;
  }
  .serviceCenterTitle h2 {
    padding: 20px;
  }
`;

export const HelpContContainer = styled.div`
  background: white;
  width: 1120px;
  margin-top: 15px;
  display: grid;
  grid-template-columns: 240px 880px;
`;
export const ButtonContainer = styled.div`
  ul {
    padding: 0;
  }
  ul a {
    height: 65px;
    font-size: 1.3rem;
  }
  ul a li {
    border-bottom: 1px solid lightgray;
    padding: 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
  }
`;

export default StyledLink;
