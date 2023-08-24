import React from 'react'
import styled, { css } from 'styled-components';

import theme from '../styles/theme'

const StyleButton = styled.button`
  /* 공통 스타일 */
  width: ${props => props.width || 'undefined'};
  display: inline-flex;
  align-items:center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  ${props =>
  props.point || props.order?
    css `
      background-color: ${props.point ? theme.button.accentBgColor : theme.button.baseTextColor};
      color: ${theme.button.accentTextColor};
      height: ${props.height || undefined};
    ` :
    css `
      border: 1px solid ${theme.button.baseBorderColor}; 
      color: ${theme.button.baseTextColor};
      height: ${props.height || undefined};
    `}

  /*${props =>
  props.point ?
    css `
      background-color: ${theme.button.accentBgColor}
      color: ${theme.button.accentTextColor}
    ` :
    css `
      background-color: ${theme.button.baseBgColor}
      color: ${theme.button.baseTextColor}
    `}
    */
`;


function LineButton({children, width, height, order, point, ...rest }) {
  console.log({ children }); //{children: "Button"}
  console.log('LineButton : ', { ...rest }); //{} (빈 객체--props가 딱히 없으므로)
  return <StyleButton 
    width={width} 
    height={height} 
    point={point}
    order={order}
    {...rest}
    >{children}
  </StyleButton>;
}


export default LineButton