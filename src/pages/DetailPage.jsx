import React from "react";

import DetailRecommend from "../components/DetailRecommend";
import Detail1 from "../components/Detail1";
import Detail2 from "../components/Detail2";
import DetailMain from "../components/DetailMain";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import pagesData from "../totalData.json";

const DetailPage = () => {
  const { id } = useParams();
  const pageData = pagesData.find((data) => data.id === id);

  return (
    <div className="App">
      <Header />
      <DetailMain data={pageData} />
      <Detail1 data={pageData} />
      <Detail2 data={pageData} />
      <DetailRecommend />
    </div>
  );
};

export default DetailPage;
