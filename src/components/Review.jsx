import React, { useEffect, useState } from 'react'
import "../css/Review.css";
import callPostAxios from '../util/callPostAxios';
import axios from 'axios';


const Review = ( data ) => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [textarea, settexTarea] = useState('');
  const [imageFile, setImageFile] = useState(null); 

  const handleRatingChange = (event) => {
    const intValue = parseInt(event.target.value, 10);
    setSelectedRating(intValue);
  }
  const handleTextareaChange = (event) => {
    const text = event.target.value;
    settexTarea(text);
  }
  const showId = data; 
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  }

  const addReview = () => {
    const requestData = {
      reviewText: textarea,
      reviewImgUrl: "test url 1",
      reviewGrade: selectedRating,
      showId: 1 //임시 showid
    };
  
    axios.post("/review", requestData, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => {
      console.log("리뷰가 성공적으로 등록되었습니다.", response.data);
      alert("리뷰가 성공적으로 등록되었습니다.");
    })
    .catch((error) => {
      console.error("리뷰 등록 중 오류가 발생했습니다.", error);
      alert("리뷰 등록 중 오류가 발생했습니다.");
    });



  }

  return (
    <div className='product_detail_tabcontent review_comment'>
      <div className='review_comment_write'>
          <div className='review_content_heading'>
            <h2 className='review_content_title'>관람후기<span className='text_number red'>161</span></h2>
            <div className='review_star_rate'>
              <div className='review_star'></div>
              <span className='review_star_score'>
                <span className='product_star_current'></span>
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
                    <label for="5-stars" className="star">&#9733;</label>
                    <input type="radio" id="4-stars" name="rating" value="4" onChange={handleRatingChange}/>
                    <label for="4-stars" className="star">&#9733;</label>
                    <input type="radio" id="3-stars" name="rating" value="3" onChange={handleRatingChange}/>
                    <label for="3-stars" className="star">&#9733;</label>
                    <input type="radio" id="2-stars" name="rating" value="2" onChange={handleRatingChange}/>
                    <label for="2-stars" className="star">&#9733;</label>
                    <input type="radio" id="1-star" name="rating" value="1" onChange={handleRatingChange}/>
                    <label for="1-star" className="star">&#9733;</label>  
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
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                    <div className='comment_btn_box'>
                      <button type='button' onClick={addReview}>등록</button>
                    </div>{/*comment_btn_box*/}
                  </div>{/*comment_util_right*/}
                </div>

              </div>{/*comment_content*/}
            </div>{/*comment_content*/}
          </div> {/* product_comment_form */}
      </div> {/* review_comment_write */}
      
    </div> 
  )
}


export default Review

