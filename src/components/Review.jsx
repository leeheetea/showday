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
            
          </div> {/* product_comment_form */}
      </div> {/* review_comment_write */}
    </div> 
  )
}



export default Review