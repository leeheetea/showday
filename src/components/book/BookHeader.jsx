import React, { useState, useEffect } from 'react'
import { NavLink, Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components'

import theme from '../../styles/theme'

const headerList = [
  { step: 1, title : '날짜/회차선택'},
  { step: 2, title : '좌석선택'},
  { step: 3, title : '할인/매수선택'},
  { step: 4, title : '예매확인'},
  { step: 5, title : '결재하기'},
];

const BookHeaderWrapper = styled.div`
  height: 60px;
  width: 70%;
  padding: 0px;
  margin: 0px;
  background-color: '#999999';
`
const ItemContainer = styled.div`
  /*clip-path: polygon(0% 0%, 92% 0, 100% 50%, 91% 100%, 0% 100%);*/
  clip-path: polygon(90% 0, 100% 50%, 90% 100%, 0% 100%, 10% 50%, 0% 0%);
  background-color: ${(props) => props.isAccent ? '#333333' : '#999999'};
`
const HeaderList = styled.ul`
  width: 100%;
  height: 100%;
  text-align:center;
  line-height: 60px;

`

const HeaderListItem = styled.li`
  display: inline-block;
  width:20%; 
  height:100%; 
  color: white;
  cursor:pointer;
  text-decoration: none;
`
const BookHeader = ({onBookStepClick}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepClick = (index) => {
    console.log('[BookHeader] onHeaderClick index : ', index);
    setCurrentStep(index);
    onBookStepClick(index);
}

  return (
    <BookHeaderWrapper>
      <HeaderList>
        {headerList.map((menu, index) => {
          return (
            <HeaderListItem 
            key={index} 
            onClick={() => handleStepClick(index)}>
                <ItemContainer isAccent={(currentStep === index) ? true: false}>{menu.title}</ItemContainer>                
              </HeaderListItem>
          )})}
      </HeaderList>
    </BookHeaderWrapper>
  )
}

export default BookHeader