import styled from "styled-components";
import { FaShareAlt } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import "../App.css";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import "../css/DetailMain.css";
import { call } from "../ApiService";

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
  @media screen and (max-width: 800px) {
    width: 480px;
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

const InfoTitle = styled.div`
  font-weight: bold;
  color: gray;
  padding: 0 10px 0 0;
`;

const customModalStyles = {
  content: {
    width: "20%",
    height: "10%",
    top: "30%",
    left: "80%",
    transform: "translate(-50%, -50%)",
  },
};


const DetailMain = () => {
  
  const [shareModalIsOpen, setShareModalIsOpen] = useState(false);

  //공연이미지 url, title, place, period, price 필요 정보.
  const [showItems, setShowItems] = useState([]);
  // useEffect(()=>{ 
  //   const fetchShowItem = async()=>{
  //     const res = await fetch("").then((res)=>res.json());
  //   }
  // },[]);

  console.log("showItems===" +showItems);

  return (
    <div className="detailMainBody">
      <MainImgTextContainer id="content">
        <div>
          <ImgSizeWrapper src={showItems.thumbnailUrl} alt="/" />
        </div>

        <div className="product_detail_info">
          <div className="product_heading">
            <h2 className="product_title">{showItems.title}</h2>
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

          <div className="product_info_list1">
            <li className="product_info_item">
              <InfoTitle className="product_info_title">장소</InfoTitle>
              <div>{showItems.venueId}</div>
            </li>

            <li className="product_info_item">
              <InfoTitle className="product_info_title">기간</InfoTitle>
              <div>{showItems.period}</div>
            </li>

            <li className="product_info_item">
              <InfoTitle className="product_info_title">가격</InfoTitle>
              <div>{showItems.price}</div>
            </li>
          </div>
        </div>
      </MainImgTextContainer>
    </div>
  );
};

export default DetailMain;
