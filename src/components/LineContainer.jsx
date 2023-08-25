import React from "react";
import styled, { css } from "styled-components";

const StyleDiv = styled.div`
  /* 공통 스타일 */
  width: ${props => props.width || 'undefined'};
  height: ${props => props.height || 'auto'};
  padding: ${props => props.padding ? props.padding : '20px'};
  padding-top: ${props => props.tpadding ? props.tpadding : '20px'};
  margin: ${props => props.margin || ''};
  margin-top: ${props => props.tMargin || ''};
  border: 1px solid ${props => props.lineColor || '#ECEDFC'}; ;
  background-color: ${props => props.bgColor || 'white'};
  text-align: ${props => props.isfrontcenter ? 'center' : ''};
  /* display: flex;
  flex-direction: row; */
`;

function LineContainer({ 
  children, width, height, tpadding, tMargin, lineColor, isfrontcenter, bgColor, padding,
  ...rest }) {
  return <StyleDiv 
    width={width} 
    height={height} 
    padding-top={tpadding} 
    margin-top={tMargin}
    lineColor={lineColor} 
    bgColor={bgColor} 
    isfrontcenter={isfrontcenter}
    padding={padding}
    {...rest}>
    {children}
  </StyleDiv>;
}

export default LineContainer;
