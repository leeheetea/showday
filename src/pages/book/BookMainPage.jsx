import React, { useState } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "../../components/Header";
import BookHeader from "../../components/book/BookHeader";
import ChangeDatePage from "../../pages/book/ChangeDatePage";
import ChooseSeatsPage from "../../pages/book/ChooseSeatsPage";
import DiscountPricePage from "../../pages/book/DiscountPricePage";
import CheckBooksPage from "../../pages/book/CheckBooksPage";
import PaymentPage from "./PaymentPage";
import BookInfoView from "../../components/book/BookInfoView";
import "./BookMainPage.css";

const BookMainPage = (data) => {
  const { id } = useParams();
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState(1);

  const handleBookBtnClick = () => {};

  const handleStepClick = (index) => {
    setCurrentTab(index);
    navigator(`/book/${index}/${id}`);
  };

  return (
    <>
      <Header />
      <div className="rootWrapper">
        <BookHeader id={id} onBookStepClick={handleStepClick} />
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
