import React, { useEffect, useState } from 'react'
import "../css/Review.css";
import callPostAxios from '../util/callPostAxios';
import axios from 'axios';
import callAxios from '../util/callAxios';
import { createReview } from '../page/ApiService';
import { useNavigate } from 'react-router-dom';


const Review = ({data}) => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [textarea, settexTarea] = useState('');
  const [reviewItems, setReviewItems] = useState([]);

  const showId = data; 
  const url = "/review/"+showId;
  useEffect(()=>{
    fetchReviewItem();
  },[showId]);

  const fetchReviewItem = async()=>{
    callAxios(url,setReviewItems);
  }

  const handleRatingChange = (event) => {
    const intValue = parseInt(event.target.value, 10);
    setSelectedRating(intValue);
  }
  const handleTextareaChange = (event) => {
    const text = event.target.value;
    settexTarea(text);
  }

  const averageReviewGrade = reviewItems.length > 0
  ? reviewItems.reduce((sum, review) => 
    sum + review.reviewGrade, 0) / reviewItems.length
  : 0;

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
    

    return review.authEmail;
  }

  //댓글 등록  
  const addReview = () => {
    const nowDate = new Date();
    const timestamp =nowDate.toISOString().slice(0, 19).replace('T', ' ');
    console.log(timestamp);
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
        // window.location.href=`/detailpage/${showId}`;
      }).catch((error) => {
      console.error("리뷰 등록 중 오류가 발생했습니다.", error);
      alert("리뷰 등록 중 오류가 발생했습니다.");
    });
  }



  

  return (
    <div className='product_detail_tabcontent review_comment'>
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
                    maxLength={300} onChange={handleTextareaChange}>
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
              </div>
            </div>
          ))}
        </div>        

      </div> {/* review_comment_write */}
    </div> 
  );
}


export default Review