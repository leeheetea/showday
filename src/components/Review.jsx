import React from 'react'



const Review = (props) => {
  

  return (
    <div className='product_detail_tabcontent review_comment'>
      <div className='review_comment_write'>
          <div className='review_content_heading'>
            <h2 className='review_content_title'>관람후기<span className='text_number red'>161</span></h2>
            <div className='review_star_rate'>
              <div className='review_star'></div>
              <span className='review_star_score'>
                <span className='product_star_current'>4.9</span>
                " / 5"
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
                <span className='blind'> {/*별점 확인*/}
                  5점
                </span>
                <div className='comment_star_select'>
                  <input type='radio' name='star' id='star_1' className='star_radio' value="1" />
                    <label for="star_1" className='star_label'>
                      <span className='blind'>
                        1점
                      </span>
                    </label>

                    <p className='comment_star_desc'>5점</p>
                </div>
                <div className='comment_input_box'>
                  <label className='comment blind'>관람후기 작성란</label>
                  <textarea className='comment_textarea' placeholder='관람후기를 남겨보세요!' maxLength={1000}></textarea>
                </div>

              </div>{/*comment_content*/}
            </div>{/*comment_content*/}
          </div> {/* product_comment_form */}
      </div> {/* review_comment_write */}
    </div> 
  )
}



export default Review

