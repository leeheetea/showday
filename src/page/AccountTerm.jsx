import React from 'react'
import '../components/AccountTerm.css'

const AccountTerm = () => {
  return (
    <div>
      <div className='termContent'>
        <div className='termWrapper'>
          <div className='checkBox_allAgree'>
            <label htmlFor="">
              <input type="checkbox" />
              <span className='text'>약관 전체 동의</span>
            </label>
          </div>

          {/* 필수 동의 항목 1 */}
          <div className='termsBlock'>
            <div className='label'>필수 동의 항목</div>
            <div className="termsItem">
              <div className="checkboxDiv">
                <label htmlFor="">
                  <input type="checkbox" />
                  <div><a href="#">[필수] 이용약관</a></div>
                </label>
              </div>
              <div className="checkboxDiv">
                <label htmlFor="">
                  <input type="checkbox" />
                  <div><a href="#">[필수] 전자금융거래 이용약관</a></div>
                </label>
              </div>
              <div className="checkboxDiv">
                <label htmlFor="">
                  <input type="checkbox" />
                  <div><a href="#">[필수] 개인정보 수집동의서</a></div>
                </label>
              </div>
              <div className="checkboxDiv">
                <label htmlFor="">
                  <input type="checkbox" />
                  <div><a href="#">[필수] 개인정보 제 3자 제공동의</a></div>
                </label>
              </div>
            </div>
          </div>

          {/* 필수 동의 항목 2 */}
          <div className='termsBlock'>
            <div className='label'>커머스 필수 동의 항목</div>
            <div className="termsItem">
              <div className="checkboxDiv">
                <label htmlFor="">
                  <input type="checkbox" />
                  <div><a href="#">[필수] 이용약관</a></div>
                </label>
              </div>
              <div className="checkboxDiv">
                <label htmlFor="">
                  <input type="checkbox" />
                  <div><a href="#">[필수] 개인정보 수집동의서</a></div>
                </label>
              </div>
              <div className="checkboxDiv">
                <label htmlFor="">
                  <input type="checkbox" />
                  <div><a href="#">[필수] 개인정보 제 3자 제공동의</a></div>
                </label>
              </div>
            </div>
          </div>

          {/* 선택 동의 항목 1 */}
          <div className='termsBlock_choiceAgree'>
            <div className='label'>선택 동의 항목</div>
            <div className="termsItem">
              <div className="checkboxDiv">
                <label htmlFor="">
                  <input type="checkbox" />
                  <div><a href="#">[선택] 개인정보 수집동의서</a></div>
                </label>
              </div>
              <div className="checkboxDiv">
                <label htmlFor="">
                  <input type="checkbox" />
                  <div><a href="#">[선택] 위치기반 서비스 이용약관</a></div>
                </label>
              </div>
              <div className="checkboxDiv">
                <label htmlFor="">
                  <input type="checkbox" />
                  <div><a href="#">[선택] 제 3자 마케팅 활용동의서 전체동의</a></div>
                </label>
                <div className='noticeText'>쇼핑 2,000원 할인쿠폰 증정</div>
                <div className='termsDetailContent'>
                  <div className='termsDetailBlock'>
                    <div className='title'>맞춤서비스를 위한 분야별 마케팅활용동의 선택</div>
                    <ul>
                      <li>
                        <label htmlFor="">
                          <input type="checkbox" />
                          <span className='text'>통신</span>
                        </label>
                      </li>
                      <li>
                        <label htmlFor="">
                          <input type="checkbox" />
                          <span className='text'>손해보험</span>
                        </label>
                      </li>
                      <li>
                        <label htmlFor="">
                          <input type="checkbox" />
                          <span className='text'>생명보험</span>
                        </label>
                      </li>
                      <li>
                        <label htmlFor="">
                          <input type="checkbox" />
                          <span className='text'>라이프서비스</span>
                        </label>
                      </li>
                    </ul>
                    <div className="checkboxDiv">
                      <label htmlFor="">
                        <input type="checkbox" />
                        <span className='text'>개인정보처리 업무위탁</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 다음 단계 버튼 */}
          <div className='termsSubmit'>
            <button className='termsSubmitBtn'>다음 단계</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountTerm