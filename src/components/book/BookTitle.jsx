import React from "react";
import styled from "styled-components";
import { Line } from "../../styles/styled";

const StyleTitle = styled.h3`
  /* 공통 스타일 */
  /* display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem; */
  text-align: ${props => props.isleft};
  font-weight: ${props => props.issubtitle ? '' : 'bold'};
  padding-top: ${props => props.tpadding ? props.tpadding : '0px'};
  margin-top: ${props => props.tmargin ? props.tmargin : '0px'};
  margin-bottom: 0.2rem;
  display: ${props => props.isflex ? 'flex' : 'block'};
`;

function BookTitle({ children, isleft, issubtitle, isBottomLine, tpadding, isflex, ...rest }) {
  return <StyleTitle
    padding-top={tpadding}
    text-align={issubtitle || isleft ? 'left' : 'center'}
    issubtitle={issubtitle}
    isflex={isflex}
    {...rest}>
    {children}
    {isBottomLine ? <Line /> : <></>}
  </StyleTitle>
}

export default BookTitle;
