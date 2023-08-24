import React from 'react'
import styled from 'styled-components';
import { Line } from '../../styles/styled'

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
  text-align: ${props => props.isSubTitle || props.isLeft ? 'left' : 'center'};
  font-weight: ${props => props.isSubTitle ? '' : 'bold'};
  padding-top: ${props => props.tPadding || ''};
`;

function BookTitle({ children, isLeft, isSubTitle, isBottomLine, tPadding, ...rest }) {
  console.log({ children }); //{children: "Button"}
  console.log({ ...rest }); //{} (빈 객체--props가 딱히 없으므로)
  return <StyleTitle 
    tPadding={tPadding} 
    isLeft={isLeft} 
    isSubTitle={isSubTitle} 
    {...rest}>
      {children} 
    {isBottomLine ? <Line/> : <></>}
  </StyleTitle>
}


export default BookTitle