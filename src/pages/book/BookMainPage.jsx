import React, { useState } from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "../../components/Header";
import BookHeader from "../../components/book/BookHeader";

import BookInfoView from "../../components/book/BookInfoView";
import "./BookMainPage.css";

const BookMainPage = (data) => {
  const { id } = useParams();
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState(1);

<<<<<<< HEAD
  const handleBookBtnClick = () => {};

  const handleStepClick = (index) => {
    setCurrentTab(index);
    navigator(`/book/${index}/${id}`);
=======
  const handleStepClick = (index) => {
    setCurrentTab(index);
    navigator("/book/" + id + "/" + index);
>>>>>>> main
  };

  return (
    <>
      <Header />
      <div className="rootWrapper">
        <BookHeader id={id} onBookStepClick={handleStepClick} />
      </div>
      <div className="bookLeftContainer">
<<<<<<< HEAD
        <Routes>
          <Route path="1" element={<ChangeDatePage />}></Route>
          <Route path="2" element={<ChooseSeatsPage />}></Route>
          <Route path="3" element={<DiscountPricePage />}></Route>
          <Route path="4" element={<CheckBooksPage />}></Route>
          <Route path="5" element={<PaymentPage />}></Route>
        </Routes>
=======
        <Outlet />
>>>>>>> main
      </div>
      {currentTab !== 5 && <BookInfoView />}
    </>
  );
};

export default BookMainPage;
