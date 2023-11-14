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
  const { bookStep } = booksDatas.bookingData;
  const [currentTab, setCurrentTab] = useState(bookStep ?? 2);

  const handleStepClick = (index, showId) => {
    console.log('상위로 이벤트 전달 확인!!! ', index);
    setCurrentTab(index);
    //console.log(`???? BookMainPage id : ${id}, currentTab : ${currentTab}, e : ${newStep}`);
    navigator("/book/" + id + "/" + index);
  };

  const handleChangDate = (e) => {
    console.log('날짜 변경됨 : ', e.target.value);
    setCurrentTab(currentTab);
  }

  console.log('currentTab : ', currentTab);

  return (
    <>
      <Header />
      <div className="rootWrapper">
        <BookHeader showId={id} index={currentTab} onBookStepClick={handleStepClick} />
        <div className={currentTab < 5 ? 'bookLeftContainer' : 'bookLeftContainerAll'}>
          <Outlet showId={id} step={currentTab} onChangeDate={handleChangDate} />
        </div>
        {currentTab < 5 && <BookInfoView />}
      </div>
    </>
  );
};

export default BookMainPage;
