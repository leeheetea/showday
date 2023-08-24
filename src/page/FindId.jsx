import React, { useState } from 'react'
import '../components/FindId.css'

const FindId = () => {
  // const [activeTab, setActiveTab] = useState('아이디 찾기');
  // const handleTabClick = (tabName) => {
  //   setActiveTab(tabName);
  // };

  return (
    <div className='body'>
      <form className='findAccountForm'>
        <div className="searchWrap">
          <div className="popHeaderWrap">
            <h1 className='popTitle'>
              <span>아이디 찾기</span>
            </h1>
            <span className='btnClose'>
              <a>닫기</a>
            </span>
          </div>
          <div className="contentsWrap">
            <div className="searchTab">
              <ul>
                <li className='current'>
                  아이디 찾기
                </li>
                <li>
                  비밀번호 찾기
                </li>
                {/* <li className={activeTab === '아이디 찾기' ? 'current' : ''}>
                  <a href="#" onClick={() => handleTabClick('아이디 찾기')}>아이디 찾기</a>
                </li>
                <li className={activeTab === '비밀번호 찾기' ? 'current' : ''}>
                  <a href="#" onClick={() => handleTabClick('비밀번호 찾기')}>비밀번호 찾기</a>
                </li> */}
              </ul>
            </div>
            <div className="idSearchWrap">
              <div className="notiArea">
                <span>아이디를 찾을 방법을 선택해주세요.</span>
              </div>
              <div className="searchType">
                <ul>
                  {/* 휴대폰번호로 찾기 */}
                  <li className='typeList'>
                    <div className='title'>
                      <button>등록된 휴대폰번호로 찾기</button>
                    </div>
                    <div className='inputEnter'>
                      <div className='inputBox'>
                        <div className="styleInput">
                          <input type="text" id='memNm1' className='iInput' placeholder='이름' />
                          <span id='memNm1Clear' className='delBtn'></span>
                        </div>
                        <div className="telInput">
                          <input type="text" id='inputTel' className='iInput' inputMode='numeric' placeholder='휴대폰번호 (-없이 입력)' />
                          <span id='inputTelClear' className='delBtn'></span>
                          <p className='error'>이름을 입력해주세요.</p>
                          <p className='error'>잘못된 휴대폰번호 형식입니다. (-없이 입력)</p>
                        </div>
                      </div>
                      <div className='btnArea'>
                        <button type='submit' className='btnRed'>확인</button>
                      </div>
                    </div>
                  </li>
                  {/* 이메일로 찾기 */}
                  <li className='typeList'>
                    <div className='title'>
                      <button>등록된 이메일로 찾기</button>
                    </div>
                    <div className='inputEnter'>
                      <div className='inputBox'>
                        <div className="styleInput">
                          <input type="text" id='memNm2' className='iInput' placeholder='이름' />
                          <span id='memNm1Clear' className='delBtn'></span>
                        </div>
                        <div className='emailContainer'>
                          <div className="emailInput">
                            <input type="text" id='inputEmail' className='iInput' placeholder='이메일' />
                            <span id='inputTelClear' className='delBtn'></span>
                          </div>
                          <div className="emailSelect">
                            <select name="memEmail2" id="memEmail2">
                              <option value="etc">직접입력</option>
                              <option value="naver.com">naver.com</option>
                              <option value="hanmail.net">hanmail.net</option>
                              <option value="gmail.com">gmail.com</option>
                              <option value="nate.com">nate.com</option>
                              <option value="hotmail.com">hotmail.com</option>
                            </select>
                            <div className='newSelect'>
                              {/* todo */}
                            </div>
                            <ul className='options'>
                              <li className="option">직접입력</li>
                              <li className="option">naver.com</li>
                              <li className="option">hanmail.net</li>
                              <li className="option">gmail.com</li>
                              <li className="option">nate.com</li>
                              <li className="option">hotmail.com</li>
                            </ul>
                          </div>
                        </div>
                        <p className='error'>이름을 입력해주세요.</p>
                        <p className='error'>잘못된 이메일 형식입니다.</p>
                      </div>
                      <div className='btnArea'>
                        <button type='submit' className='btnRed'>확인</button>
                      </div>
                    </div>
                  </li>
                  {/* 본인인증으로 찾기 */}
                  <li>
                    <div className="title">
                      <button type="button">본인인증으로 찾기 (아이디 전체 확인 가능)</button>
                    </div>
                    <div className="inputEnter">
                      <div className="inputBox">
                        <div className="btnBox_phone">
                          <a href=""></a>
                        </div>
                        <div className="btnBox_ipin">
                          <a href=""></a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </form>

    </div>
  )
}

export default FindId