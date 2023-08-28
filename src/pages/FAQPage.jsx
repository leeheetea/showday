import React from "react";
// import ServiceFAQ from "../components/ServiceFAQ";
import "../css/ServiceFAQ.css";
import SimpleBoard from "../components/board/SimpleBoard";

const FAQPage = () => {
  const faqselector = (state) => state.faq;

  return (
    <div className="serviceFAQPageContainer">
      <div>
        <h1>FAQ</h1>
      </div>
      {/* <ServiceFAQ /> */}
      <SimpleBoard selector={faqselector} />
    </div>
  );
};

export default FAQPage;
