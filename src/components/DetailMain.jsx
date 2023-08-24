import styled from "styled-components";
import { FaShareAlt } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import "../App.css";
import { useState } from "react";
import Modal from "react-modal";
import show from "../concertData.json";
import "../css/DetailMain.css"

const Main = ({ data }) => {
  const MainImgTextContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 45px;

    .product_detail_info {
      width: 1000px;
    }

    @media screen and (max-width: 1100px) {
      align-items: center;
      .product_info_list2 {
        border-top: 1px solid lightgray;
      }
    }
    @media screen and (max-width: 700px) {
      .product_detail_info {
        width: 450px;
      }
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
  `;
  const ImgSizeWrapper = styled.img`
    width: 405px;
    height: 500px;
    border-radius: 5px;
  `;
  const DetailInfo = styled.div`
    margin: 0 0 0 2rem;
    .product_heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0 1rem 0;
      margin-bottom: 1rem;
      border-bottom: 1px solid black;
    }
    .product_heading div {
      width: 1000px;
    }
  `;

  const ProductInfoListContainer = styled.ul`
    float: left;
    display: grid;
    width: 100%
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px 50px;
    list-style: none;
    padding-left: 0;
    li{
      margin-top: 1rem;
      display: flex;
      padding: 1rem;  
    }
    .product_info_title{
      width: 5rem;
    }
    li InfoTitle{
      margin: 0 1.0rem 0 0;
    }
    @media screen and (max-width: 1100px) {
      float: none;
    }
    `;

  const InfoTitle = styled.div`
    font-weight: bold;
    color: gray;
    padding: 0 10px 0 0;
  `;

  const [shareModalIsOpen, setShareModalIsOpen] = useState(false);

  const customModalStyles = {
    content: {
      width: "20%",
      height: "10%",
      top: "30%",
      left: "80%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className="body">
      <MainImgTextContainer id="content">
        <div>
          <ImgSizeWrapper src={data.url} alt="/" />
        </div>

        <DetailInfo className="product_detail_info">
          <div className="product_heading">
            <h2 className="product_title">{data.title}</h2>
            <span className="product_shareButton">
                <button onClick={() => setShareModalIsOpen(true)}>
                  <FaShareAlt size="20" />
                </button>
              <Modal
                isOpen={shareModalIsOpen}
                onRequestClose={() => setShareModalIsOpen(false)}
                style={customModalStyles}
              >
                <button>
                    <BiLinkAlt></BiLinkAlt>
                </button>
              </Modal>
            </span>
          </div>

          <ProductInfoListContainer className="product_info_list1">
            <li className="product_info_item">
              <InfoTitle className="product_info_title">장소</InfoTitle>
              <div>{data.place}</div>
            </li>

            <li className="product_info_item">
              <InfoTitle className="product_info_title">기간</InfoTitle>
              <div>{data.period}</div>
            </li>
          </ProductInfoListContainer>

          <ProductInfoListContainer className="product_info_list2 ">
            <li className="product_info_item">
              <InfoTitle className="product_info_title">가격</InfoTitle>
              <div>{data.price}</div>
            </li>
          </ProductInfoListContainer>
        </DetailInfo>
      </MainImgTextContainer>
    </div>
  );
};

export default Main;
