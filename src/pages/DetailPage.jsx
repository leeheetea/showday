import React from "react";

import DetailRecommend from "../components/DetailRecommend";
import Detail1 from "../components/Detail1";
import Detail2 from "../components/Detail2";
import DetailMain from "../components/DetailMain";
import Header from "../components/Header";

const DetailPage = () => {
  return (
    <div className="App">
      <Header />
      <DetailMain></DetailMain>
      <Detail1></Detail1>
      <Detail2></Detail2>
      <DetailRecommend></DetailRecommend>
    </div>
  );
};

export default DetailPage;
