import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, Outlet } from "react-router-dom";

import Header from "../../components/Header";
import BookHeader from "../../components/book/BookHeader";
import BookInfoView from "../../components/book/BookInfoView";

import "./BookMainPage.css";

const BookMainPage = () => {
  const { id, index } = useParams();
  const navigator = useNavigate();
  const booksDatas = useSelector((state) => state.booksData);
  const [currentTab, setCurrentTab] = useState(booksDatas.bookStep ?? 2);

  const handleStepClick = (newStep) => {
    setCurrentTab(newStep);
    // console.log(`???? handleStepClick id : ${id}, currentTab : ${currentTab}, e : ${newStep}`);
    navigator("/book/" + id + "/" + newStep);
  };

  const handleChangDate = (e) => {
    console.log('날짜 변경됨 : ', e.target.value);
    setCurrentTab(currentTab);
  }

  return (
    <>
      <Header />
      <div className="rootWrapper">
        <BookHeader showId={id} index={currentTab} onBookStepClick={handleStepClick} />
        <div className={currentTab !== 5 ? 'bookLeftContainer' : 'bookLeftContainerAll'}>
          <Outlet showId={id} step={currentTab} onChangeDate={handleChangDate} />
        </div>
        {currentTab !== 5 && <BookInfoView />}
      </div>
    </>
  );
};

export default BookMainPage;
