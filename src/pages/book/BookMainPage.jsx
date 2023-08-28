import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";

import Header from "../../components/Header";
import BookHeader from "../../components/book/BookHeader";
import BookInfoView from "../../components/book/BookInfoView";

import "./BookMainPage.css";

const BookMainPage = () => {
  const { id } = useParams();

  const navigator = useNavigate();
  const [currentTab, setCurrentTab] = useState(1);

  console.log('BookMainPage : ', currentTab);

  const handleStepClick = (index) => {
    setCurrentTab(index);
    navigator("/book/" + id + "/" + index);
  };

  const handleChangDate = (e) => {
    console.log('날짜 변경됨 : ', e.target.value);
  }

  const handleChangePrice = (e) => {
    alert('가격변경');
  }

  return (
    <>
      <Header />
      <div className="rootWrapper">
        <BookHeader id={id} onBookStepClick={handleStepClick} />
      </div>
      <div className={currentTab !== 5 ? 'bookLeftContainer' : 'bookLeftContainerAll'}>
        <Outlet context={id} onChangeDate={(e) => handleChangDate(e)} />
      </div>
      {currentTab !== 5 && <BookInfoView />}
    </>
  );
};

export default BookMainPage;
