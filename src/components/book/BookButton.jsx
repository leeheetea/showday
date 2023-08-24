import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'

const SimpleButton = styled.button`
  width: 100px;
  height: 2rem;
  position: absolute;
  left: 10px;
  color: white;
  background: ${theme.accentColor};
  outline: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`

const BookButton = ({onClick}) => {
 
  return (
    <>
      <SimpleButton onClick={onClick}>
        예약하기
      </SimpleButton>
    </>
  )
}

export default BookButton;