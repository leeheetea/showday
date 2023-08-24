import React, { useState } from 'react'
import styled from 'styled-components'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import LineContainer from '../../components/LineContainer';
import BookTitle from '../../components/book/BookTitle';
import './ChangeDatePage.css'
import theme from '../../styles/theme';

const ChangeDatePage = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='changeDateContainer'>
      <div className='topContainer'>
        <LineContainer width='40%' height='320px' isFontCenter={true}>
          <BookTitle isBottomLine>날짜선택</BookTitle>
          <div>
           <Calendar onChange={onChange} value={value} />
          </div>
        </LineContainer>
        <LineContainer width='30%' height='320px'  isFontCenter={true}>
         <BookTitle isBottomLine>회차선택</BookTitle>
          <LineContainer lineColor='black' padding='5px'>
            <ul>
              <li className='textLine'>
                <span className='textLeft'>1회</span>
                <span className='textRight'>19:30</span>
              </li>
              <li className='textLine'>
                <span className='textLeft'>유승현, 최수진, 유성재, 청호준, 박세훈, 성재, 정종환, 박상선, 신요셉</span>
              </li>
            </ul>
         </LineContainer>
        </LineContainer>
        <LineContainer width='30%' height='320px' isFontCenter={true}>
          <BookTitle isBottomLine>잔여석</BookTitle>
          <ul>
            <li className='textLine'><span className='textLeft'>전체</span><span className='textRight'>234석</span></li>
            <li className='textLine'><span className='textLeft'>전체</span><span className='textRight'>234석</span></li>
          </ul>
        </LineContainer>
      </div>
    </div>
  )
}

export default ChangeDatePage