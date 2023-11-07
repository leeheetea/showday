import styled from "styled-components";
import { FaShareAlt } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import "../App.css";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import "../css/DetailMain.css";
import callAxios from "../util/callAxios";

const MainImgTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 45px;

  .product_detail_info{
    width: 500px;
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

<<<<<<< HEAD



const DetailMain = ( {data} ) => {
=======
const DetailMain = ({ data }) => {
  const [shareModalIsOpen, setShareModalIsOpen] = useState(false);
>>>>>>> aa6888af9547f12bb5ae21e1fbe9d3981a3a3095

  const [shareModalIsOpen, setShareModalIsOpen] = useState(false); //링크 공유 모달
  const [showItems, setShowItems] = useState([]);
  
<<<<<<< HEAD
  const showId = data;
  const url = '/show/'+showId;
=======
  const showId = data.id; 

  const url = "/show/"+showId
>>>>>>> aa6888af9547f12bb5ae21e1fbe9d3981a3a3095

  useEffect(()=>{ 
    fetchShowItem();
  },[showId]);

  const fetchShowItem = async()=>{
    callAxios(url, setShowItems);
  }
  console.log(showId);
  
  return (
    <div className="detailMainBody">
      <MainImgTextContainer id="detailMainBodyContent">
        <div className="detailMain_content_img">
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
              {/* <div>{showItems.showSchedules}</div> */}
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
