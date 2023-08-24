import React from "react";
import styled from "styled-components";
import { Line } from "../../styles/styled";

const StyleTitle = styled.h1`
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
  text-align: ${(props) =>
    props.isSubTitle || props.isleft ? "left" : "center"};
  font-weight: ${(props) => (props.isSubTitle ? "" : "bold")};
  padding-top: ${(props) => props.tpadding || ""};
`;

function BookTitle({
  children,
  isleft,
  isSubTitle,
  isBottomLine,
  tpadding,
  ...rest
}) {
  return (
    <StyleTitle
      tpadding={tpadding}
      isleft={isleft}
      isSubTitle={isSubTitle}
      {...rest}
    >
      {children}
      {isBottomLine ? <Line /> : <></>}
    </StyleTitle>
  );
}

export default BookTitle;
