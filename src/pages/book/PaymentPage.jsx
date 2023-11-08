import React from 'react'

import './PaymentPage.css'
import BookInfoView from "../../components/book/BookInfoView";
import DiscountPricePage from "./DiscountPricePage";

const PaymentPage = () => {
  return (
    <div className='paymentContainer'>
      <BookInfoView>
      </BookInfoView>
    </div>
  )
}

export default PaymentPage