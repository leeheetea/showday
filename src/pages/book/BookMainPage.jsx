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

  const handleStepClick = (index) => {
    setCurrentTab(index);
    navigator("/book/" + id + "/" + index);
  };

  return (
    <>
      <Header />
      <div className="rootWrapper">
        <BookHeader id={id} onBookStepClick={handleStepClick} />
      </div>
      <div className="bookLeftContainer">
        <Outlet />
      </div>
      {currentTab !== 5 && <BookInfoView />}
    </>
  );
};

export default BookMainPage;
