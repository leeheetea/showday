import React, { useEffect, useRef, useState } from 'react'
import "../css/Review.css";
import callAxios from '../util/callAxios';
import { createReview, deleteReview, getReviewInfo, updateReview, userEmailCheck } from '../page/ApiService';
import { useNavigate } from 'react-router-dom';


const Review = ({data}) => {
  const navigate = useNavigate();
  const modalRef = useRef(null); //모달 

  const [selectedRating, setSelectedRating] = useState(null); //별점
  const [reviewRating, setReviewRating] = useState(null); //수정별점
  const [textarea, setTexTarea] = useState(''); // 리뷰내용
  const [reviewItems, setReviewItems] = useState([]); // 리뷰 아이템
  const [userEmail, setUserEmail] = useState([]); // 로그인 유저 이메일
  const [editReviewContent, setEditReviewContent] = useState(''); //리뷰 수정 내용
  const [isModalOpen,setIsModalOpen] =useState(false);//리뷰 수정 모달
  const [selectedReviewId, setSelectedReviewId] = useState(null); // 리뷰 아이디

  const showId = data; 
  const url = "/review/"+showId;
  useEffect(()=>{
    fetchReviewItem();
  },[showId]);

  //리뷰 리스트 호출
  const fetchReviewItem = async()=>{
    callAxios(url,setReviewItems);
  }
  //별점 
  const handleRatingChange = (event) => {
    const intValue = parseInt(event.target.value, 10);
    setSelectedRating(intValue);
  }
  //별점 수정
  const handleRatingReChange = (event) =>{
    const intValue = parseInt(event.target.value, 10);
    setReviewRating(intValue);
  }

  //리뷰 내용
  const handleTextareaChange = (event) => {
    const text = event.target.value;
    setTexTarea(text);
  }
  //리뷰 평점
  const averageReviewGrade = reviewItems.length > 0
  ? reviewItems.reduce((sum, review) => 
    sum + review.reviewGrade, 0) / reviewItems.length
  : 0;

  //리뷰 날짜 표시
  const reviewTime = (review) => {
    if (!review || !review.reviewTimestamp) {
      return "날짜 없음";
    }
    const timestamp = review.reviewTimestamp;
    return timestamp;
  }; 
  
  // 댓글 유저이메일
  const reviewAuthEmail = (review)=>{
    if(!review.authEmail){
      return "익명";
    }
    const atIndex = review.authEmail.indexOf("@");
    if (atIndex !== -1 && atIndex >= 2) {
      const prefix = review.authEmail.substring(0, 2);
      const asterisks = "*".repeat(atIndex - 2);
      return prefix + asterisks + review.authEmail.substring(atIndex);
    }
    if (atIndex !== -1) {
      return review.authEmail.substring(0, atIndex);
    }
    return review.authEmail;
  }

  //댓글 등록  
  const addReview = () => {
    if (!selectedRating){
      alert("별점을 등록해주세요.");
      return ;
    }
    if(!textarea){
      alert("관람 후기를 입력해주세요.");
      return ;
    }

  userEmailCheck()
  .then((res) => {
    setUserEmail(res);
    if (userEmail) {
      const nowDate = new Date();
      const timestamp = nowDate.toISOString().slice(0, 19).replace('T', ' ');

      const requestData = {
        reviewGrade: selectedRating,
        reviewText: textarea,
        showId: showId,
        reviewTimestamp: timestamp,
      };

      createReview(requestData)
        .then((res) => {
          alert("리뷰가 성공적으로 등록되었습니다.");
          console.log("res===" + res);
          fetchReviewItem();
          setTexTarea('');
        })
        .catch((error) => {
          console.error("리뷰 등록 중 오류가 발생했습니다.", error);
        });
    } else {
      alert("로그인이 필요합니다.");
      navigate('/login');
    }
  })
  .catch((err) => {
    setUserEmail(null);
    alert("로그인이 필요합니다.");
    navigate('/login');
  });

}


  //리뷰 수정
  const handleEditClick = (reviewId, reviewText, authEmail, rating) => {
    setEditReviewContent(reviewText);
    setSelectedReviewId(reviewId);
    setIsModalOpen(true);
    
    getReviewInfo(reviewId)
    .then((reviewInfo) => {
      setReviewRating(reviewInfo.reviewGrade);
      // console.log(reviewRating);
    }).catch((e)=>{
      console.log("리뷰 데이터를 받아오지 못했습니다.");
      console.log(e);
    }
    );
  };

  const handleUpdateReview =(reviewId)=>{
    const nowDate = new Date();
    const timestamp =nowDate.toISOString().slice(0, 19).replace('T', ' ');
    const requestData = {
      reviewId: reviewId,
      reviewGrade: reviewRating,
      reviewText: editReviewContent,
      showId: showId,
      reviewTimestamp: timestamp,
    };
    updateReview(reviewId,requestData)
      .then((res) => {
        alert("리뷰가 성공적으로 수정되었습니다.");
        console.log("res===" + res);
        fetchReviewItem();
      }).catch((error) => {
      console.error("리뷰 수정 중 오류가 발생했습니다.", error);
      alert("리뷰 등록 중 오류가 발생했습니다.");
    });
    setIsModalOpen(false);
  }

//리뷰 삭제
const handleDeleteReview= (reviewId) =>{
  deleteReview(reviewId)
    .then((res) => {
      alert("리뷰가 성공적으로 삭제되었습니다.");
      console.log("res===" + res);
      fetchReviewItem();
    }).catch((error) => {
    console.error("리뷰 삭제 중 오류가 발생했습니다.", error);
    alert("리뷰 등록 중 오류가 발생했습니다.");
  });
}

// 모달의 스타일 설정
const modalStyle = {
  width: `500px`,
  position: `fixed`,
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
  backgroundColor: `white`,
  padding: `15px`,
  borderRadius : `5px`,
  boxShadow: `0 0 10px rgba(0, 0, 0, 0.2)`
};
//모달 닫기
const closeModal = () => {
  setIsModalOpen(false);
};
//모달 외부 클릭 시
const handleModalClick = (event) => {
  if (modalRef.current && !modalRef.current.contains(event.target)) {
    closeModal();
  }
};
  return (
    <div>
      <div className='review_comment_write'>
          <div className='review_content_heading'>
            <h2 className='review_content_title'>관람후기<span className='text_number red'>{reviewItems.length}</span></h2>
            <div className='review_star_rate'>
              <div className='review_star'>{averageReviewGrade.toFixed(1)}</div>
              <span className='review_star_score'>
                <span className='product_star_current'> </span>
                 / 5
              </span>
            </div> {/* review_star_rate */}
          </div> {/* review_content_heading */}
          <div className='product_comment_notice'>
            <p>게시판 운영규정에 맞지 않는 글은 사전 통보없이 삭제될 수 있습니다.</p>
            <a href='/rule/board/popup' target="_blank" className='btn_hyperlink'>"게시판 운영규정"</a>
          </div> {/* product_comment_notice */}
          <div className='product_comment_form '>
            <div className='comment_content'>
              <div className='comment_star_rate'>
                {/* <span className='blind'>5점</span> */}
                <div className='comment_star'>
                 <div className='comment_star_select'>
                    <input type="radio" id="5-stars" name="rating" value="5" onChange={handleRatingChange}/>
                    <label htmlFor="5-stars" className="star">&#9733;</label>
                    <input type="radio" id="4-stars" name="rating" value="4" onChange={handleRatingChange}/>
                    <label htmlFor="4-stars" className="star">&#9733;</label>
                    <input type="radio" id="3-stars" name="rating" value="3" onChange={handleRatingChange}/>
                    <label htmlFor="3-stars" className="star">&#9733;</label>
                    <input type="radio" id="2-stars" name="rating" value="2" onChange={handleRatingChange}/>
                    <label htmlFor="2-stars" className="star">&#9733;</label>
                    <input type="radio" id="1-star" name="rating" value="1" onChange={handleRatingChange}/>
                    <label htmlFor="1-star" className="star">&#9733;</label>  
                 </div>
                  {selectedRating === null ? (
                    <p className='comment_star_desc'>별점을 선택해주세요.</p>)
                   : (<p className='comment_star_desc'>{selectedRating}점</p>)}  
                </div>

                <div className='comment_input_box'>
                  {/* <label className='comment blind'>관람후기 작성란</label> */}
                  <textarea className='comment_textarea' placeholder='관람후기를 남겨보세요!' 
                    maxLength={300} 
                    value={textarea}
                    onChange={handleTextareaChange}>
                  </textarea>
                </div>

                <div className='comment_util'>
                  <div className='comment_util_right'>
                    <div className='comment_length'>
                      <span className='text_length'>{textarea.length}</span>
                      <span className='limit_length'>/300</span>
                    </div>{/*comment_length */}
                    <div className='comment_btn_box'>
                      <button type='button' onClick={addReview}>등록</button>
                    </div>{/*comment_btn_box*/}
                  </div>{/*comment_util_right*/}
                </div>

              </div>{/*comment_content*/}
            </div>{/*comment_content*/}
          </div> {/* product_comment_form */}

          <div className='product_comment_list'>
          {reviewItems.map((review, index) => (
            <div key={index} className='product_comment_item'>
              <div className='comment_user_info'>
                <span className='comment_rating'>
                  {Array.from({ length: review.reviewGrade }, (_, index) => (
                    <span key={index} role="img" aria-label="별" className="comment_rating_star">&#9733;</span>
                  ))} 
                </span>
              </div>
              <div className='comment_content'>
              <p className='comment_text'>{review.reviewText}</p>
              </div>
              <div className='product_comment_info'>
                  <span className='comment_id'>
                  {reviewAuthEmail(review)}
                  </span>
                  &nbsp; &nbsp; 
                  <span className='comment_date'>
                    {reviewTime(review)}
                  </span>

                  {userEmail === review.authEmail && (
                    <span>
                        <button className="handleEditClick handleBtn" onClick={() => handleEditClick(review.reviewId, review.reviewText, review.authEmail, review.reviewRating)}>수정</button>
                        {"/"}
                        <button className="handleDeleteReview handleBtn" onClick={() => handleDeleteReview(review.reviewId)}>삭제</button>
                    </span>   
                  )}
              </div>
            </div>
          ))}
        </div>        
           {/* 댓글 수정 modal */}
           {isModalOpen && (
              <div className="modal updateReviewText" style={modalStyle} ref={modalRef}>
                 <div className="modal-header">
                  <div>댓글 수정</div>
                    <button className="close-button redBtn" onClick={closeModal}>
                      &times; 
                    </button>
                  </div>
                <div className='comment_star_container'>
                  <div className='comment_star comment_star_update'>
                   <div className='comment_star_select_update'>
                      <input type="radio" id="5-stars_update" name="rating" value="5" onChange={handleRatingReChange}/>
                      <label htmlFor="5-stars_update" className="star">&#9733;</label>
                      <input type="radio" id="4-stars_update" name="rating" value="4" onChange={handleRatingReChange}/>
                      <label htmlFor="4-stars_update" className="star">&#9733;</label>
                      <input type="radio" id="3-stars_update" name="rating" value="3" onChange={handleRatingReChange}/>
                      <label htmlFor="3-stars_update" className="star">&#9733;</label>
                      <input type="radio" id="2-stars_update" name="rating" value="2" onChange={handleRatingReChange}/>
                      <label htmlFor="2-stars_update" className="star">&#9733;</label>
                      <input type="radio" id="1-star_update" name="rating" value="1" onChange={handleRatingReChange}/>
                      <label htmlFor="1-star_update" className="star">&#9733;</label>  
                   </div>
                    {reviewRating === null ? (
                      <p className='comment_star_desc'>별점을 선택해주세요.</p>)
                     : (<p className='comment_star_desc'>{reviewRating}점</p>)}  
                  </div>
                  <input 
                    className='modalReviewTextContainer'
                    type='textarea'
                    value={editReviewContent}
                    onChange={(e) => setEditReviewContent(e.target.value)}
                  />
                </div>
                <button onClick={() => handleUpdateReview(selectedReviewId)}>수정</button>
              </div>
            )}             
      </div> {/* review_comment_write */}
    </div> 
  );
}


export default Review