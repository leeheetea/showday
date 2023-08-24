import React, { useState } from 'react'

import BookButton from '../../components/book/BookButton';
import BookHeader from '../../components/book/BookHeader';
import ChangeDatePage from '../../pages/book/ChangeDatePage';
import ChooseSeatsPage from '../../pages/book/ChooseSeatsPage';
import DiscountPricePage from '../../pages/book/DiscountPricePage';
import CheckBooksPage from '../../pages/book/CheckBooksPage';
import PaymentPage from './PaymentPage';
import BookInfoView from '../../components/book/BookInfoView'

import './BookMainPage.css'
import Header from '../../components/Header';

const BookMainPage = () => {
  const [currentTab, setCurrentTab] = useState(1);
  // const [isVisibleBookContainer, setIsVisibleBookContainer] = useState(false);

  const handleBookBtnClick = () => {
    // setIsVisibleBookContainer(!isVisibleBookContainer);
    console.log('예약하기');
  }

  const handleStepClick = (index) => {
      console.log('[BookMainPage] onBookStepClick index : ', currentTab, index);
      setCurrentTab(index);
  }
  
  function TabContent() {
    switch(currentTab) {
      case 0: return <ChangeDatePage/>; break;
      case 1: return <ChooseSeatsPage/>; break;
      case 2: return <DiscountPricePage/>; break;
      case 3: return <CheckBooksPage/>; break;
      case 4: return <PaymentPage/>; break;
      default:
        return <ChangeDatePage/>; break;
    } 
  }

  return (
   <>
      <Header/>
      <div className='rootWrapper'>
        <BookHeader onBookStepClick={handleStepClick}/>
      </div>
      <div className='bookLeftContainer'>
        <TabContent/>
      </div>
      {(currentTab !== 4) && <BookInfoView/>}
   </>
  )
}

export default BookMainPage