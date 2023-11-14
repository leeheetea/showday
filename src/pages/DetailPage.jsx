import React from "react";
import DetailRecommend from "../components/DetailRecommend";
import Detail1 from "../components/Detail1";
import Detail2 from "../components/Detail2";
import DetailMain from "../components/DetailMain";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import ToTopButton from "../components/ToTopButton ";

const DetailMainContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center;
  margin-top: 0;
  text-align: center;
`;
const DetailPage = (props) => {
  const { id } = useParams();

  return (
    <DetailMainContainer>
      <Header />
      <DetailMain data={id} />
      <Detail1 data={id} />
      <Detail2 data={id} />
      <DetailRecommend data={id} />
      <ToTopButton />
    </DetailMainContainer>
  );
};

export default DetailPage;
