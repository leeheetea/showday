import React from 'react'
import ServiceFAQ from '../components/ServiceFAQ'
import "../css/ServiceFAQ.css"


const FAQPage = () => {
  return (
    <div className='serviceFAQPageContainer'>
      <div>
        <h1>FAQ</h1>
      </div>
      <ServiceFAQ/>
    </div>
  )
}

export default FAQPage