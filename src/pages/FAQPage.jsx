import React from 'react'
import ServiceFAQ from '../components/ServiceFAQ'
import "../css/ServiceFAQ.css"
import SimpleBoard from '../components/board/SimpleBoard'


const FAQPage = () => {
  return (
    <div className='serviceFAQPageContainer'>
      <div>
        <h1>FAQ</h1>
      </div>
      <ServiceFAQ/>
      <SimpleBoard/>
    </div>
  )
}

export default FAQPage