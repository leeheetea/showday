import React from 'react'

import './BookInfoView.css'
import BOOKDATA from '../../store/bookData';
import BookTitle from './BookTitle';
import LineContainer from '../LineContainer';
import LineButton from '../LineButton';

const BookInfoView = () => {
  console.log('data : ',);
  return (
    <div className='bookInfoViewWrapper'>
      <div className='titleContainer'>
        <img className='titleLeft' src='/assets/images/musical_small.jpg' />
      </div>
      <BookTitle width='90%' tPadding='15px'>{BOOKDATA[0].title}</BookTitle>
         <BookTitle isLeft tPadding='30px'>예매정보</BookTitle>
         <LineContainer width='94%' padding='10px' tMargin='10px'>
         <ul>
                <li className='textLine'>
                  <span className='textLeft'>R석</span>
                  <span className='textRight'>1층F열3번</span>
                </li>
              </ul>
        </LineContainer>
        <table className='bookResultTable'>
          {/* <caption>예매정보</caption> */}
          <colgroup>
            <col width="70px" />
          </colgroup>
          <tbody>
            <tr className='bookResultTable'>
              <th className='bookResultTh'>일시</th>
              <td className='bookResultTd' id="_startDateTime">2023.09.28(목) 14:00</td>
            </tr>
            <tr>
              <th className='bookResultTh'>티켓금액</th>
              <td className='bookResultTd' id="_price_ticket">0</td>
            </tr>
            <tr>
              <th className='bookResultTh'>할인</th>
              <td className='bookResultTd' id="_coupon_discount">0</td>
            </tr>
            <tr>
              <th className='bookResultTh'>포인트 사용</th>
              <td className='bookResultTd' id="_price_discount">0</td>
            </tr>
          </tbody>
          <tfoot className='bookResultTfoot'>
            <tr>
              <th className='bookResultThLast'>총결제</th>
              <td className='bookResultTdLast'>60,000</td>
            </tr>
          </tfoot>
        </table>
        <div className='bookButtonContainer'>
          <LineButton width='48%' height='60px'>이전</LineButton>
          <LineButton width='48%' height='60px' order={true}>결제하기</LineButton>
        </div>
    </div>
  )
}

export default BookInfoView