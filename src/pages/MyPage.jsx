import React from "react";
import Header from "../components/Header";
import MyPageMain from "../components/MyPageMain";
import Footer from "../components/Footer";
import "../css/MyPage.css";

const MyPage = () => {
  return (
    <div>
      <Header />
      <MyPageMain></MyPageMain>
      <Footer />
    </div>
  );
};

export default MyPage;
