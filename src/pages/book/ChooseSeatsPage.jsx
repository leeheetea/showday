import React from 'react'
import styled from 'styled-components';

import './ChooseSeatsPage.css'
import BookTitle from '../../components/book/BookTitle'


const Line = styled.hr`
  border: 0.1px solid #ECEDFC;
`;

const ChooseSeatsPage = () => {
  const SEATS_COLUMN_SIZE = 10;
  let seats = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];


  return (
    <div className='chooseSeatsContainer'>
      <BookTitle width='100%' isLeft>[기획공연] 뮤지컬 '사랑은 아름다워'-광주</BookTitle>
      <BookTitle width='100%' isSubTitle tPadding='10px'>링크아트센터 벅스홀 | 2023.08.31(목) 19:30</BookTitle>
      <div className='stageContainer'>
        <span>STAGE</span>
        <div className='stageBackground'>
          <div className='seatContainer'>
            { seats.map((seat, idx) => {
                console.log('seats : ', idx);
                  return (
                    seat.map((s, idx) => {
                    console.log('s : ', idx);
                    return <div className='seat'>{idx}</div>
                  })
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseSeatsPage