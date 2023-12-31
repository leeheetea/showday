import React from "react";
import styled, { css } from "styled-components";

const StyleDiv = styled.div`
  /* 공통 스타일 */
  width: ${props => props.width || 'undefined'};
  height: ${props => props.height || 'auto'};
  padding-top: ${props => props.tpadding ? props.tpadding : '20px'};
  padding: ${props => props.padding ? props.padding : '20px'};
  margin: ${props => props.margin || ''};
  margin-top: ${props => props.tmargin || ''};
  border: 1px solid ${props => props.linecolor || '#ECEDFC'}; ;
  background-color: ${props => props.bgcolor || 'white'};
  text-align: ${props => props.isfrontcenter ? 'center' : ''};
  cursor: ${props => props.cursor ? 'pointer' : 'undefined'};
  color: ${props => props.txtcolor || ''};
  /* display: flex;
  flex-direction: row; */
`;

function LineContainer({
  children, width, height, tpadding, tmargin, linecolor, isfrontcenter, bgcolor, txtcolor, padding, cursor,
  ...rest }) {
  return <StyleDiv
    width={width}
    height={height}
    tmargin={tmargin}
    linecolor={linecolor}
    bgcolor={bgcolor}
    txtcolor={txtcolor}
    isfrontcenter={isfrontcenter}
    padding={padding}
    tpadding={tpadding}
    cursor={cursor}
    {...rest}>
    {children}
  </StyleDiv>;
}

export default LineContainer;
