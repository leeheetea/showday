import React, { useState } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import BookButton from "../../components/book/BookButton";
import BookHeader from "../../components/book/BookHeader";
import ChangeDatePage from "../../pages/book/ChangeDatePage";
import ChooseSeatsPage from "../../pages/book/ChooseSeatsPage";
import DiscountPricePage from "../../pages/book/DiscountPricePage";
import CheckBooksPage from "../../pages/book/CheckBooksPage";
import PaymentPage from "./PaymentPage";
import BookInfoView from "../../components/book/BookInfoView";
import "./BookMainPage.css";

const BookMainPage = () => {
  const param = useParams();
  console.log("param", param);
  const navigator = useNavigate();
  const [currentTab, setCurrentTab] = useState(1);

  const handleBookBtnClick = () => {
    console.log("예약하기");
  };

  const handleStepClick = (index) => {
    setCurrentTab(index);
    console.log("==== index : ", index);
    navigator("/book/" + index);
  };

  return (
    <>
      <Header />
      <div className="rootWrapper">
        <BookHeader onBookStepClick={handleStepClick} />
      </div>
      <div className="bookLeftContainer">
        <Routes>
          <Route path="1" element={<ChangeDatePage />}></Route>
          <Route path="2" element={<ChooseSeatsPage />}></Route>
          <Route path="3" element={<DiscountPricePage />}></Route>
          <Route path="4" element={<CheckBooksPage />}></Route>
          <Route path="5" element={<PaymentPage />}></Route>
        </Routes>
      </div>
      {currentTab !== 5 && <BookInfoView />}
    </>
  );
};

export default BookMainPage;
