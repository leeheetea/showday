import React, { useState } from "react";
import {
  Routes,
  Route,
  useParams,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "../../components/Header";
import BookHeader from "../../components/book/BookHeader";

import BookInfoView from "../../components/book/BookInfoView";
import "./BookMainPage.css";
import { getBooksInfo } from "../../store/slice";

const BookMainPage = (data) => {
  const { id } = useParams();
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState(1);

  console.log("(BookMainPage) : ", dispatch(getBooksInfo(id)));

  // const [isVisibleBookContainer, setIsVisibleBookContainer] = useState(false);

  const handleStepClick = (index) => {
    // console.log('[BookMainPage] onBookStepClick index : ', currentTab, index);
    setCurrentTab(index);
    // console.log('==== index : ', index);
    // console.log('==== data2 : ', data);
    navigator("/book/" + id + "/" + index);
  };

  /*   function TabContent() {
    switch(currentTab) {
      case 0: return <ChangeDatePage/>; break;
      case 1: return <ChooseSeatsPage/>; break;
      case 2: return <DiscountPricePage/>; break;
      case 3: return <CheckBooksPage/>; break;
      case 4: return <PaymentPage/>; break;
      default:
        return <ChangeDatePage/>; break;
    } 
  } */

  return (
    <>
      <Header />
      <div className="rootWrapper">
        <BookHeader onBookStepClick={handleStepClick} />
      </div>
      <div className="bookLeftContainer">
        <Outlet />
      </div>
      {currentTab !== 5 && <BookInfoView />}
    </>
  );
};

export default BookMainPage;
