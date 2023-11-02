import React, { useEffect, useState } from 'react'
import '../components/AccountTerm.css'
import { useNavigate } from 'react-router-dom'
import AccountHeader from '../components/AccountHeader'

const AccountTerm = () => {
  const navigate = useNavigate();

  // 전체 동의와 동의항목 10가지 처리
  const [allAgree, setAllAgree] = useState(false);
  const [termsChecked, setTermsChecked] = useState({
    term1: false,
    term2: false,
    term3: false,
    term4: false,
    term5: false,
    term6: false,
    term7: false,
    term8: false,
    term9: false,
    term10: false
  });

  const handleAllAgreeChange = () => {

    const updatedTermsChecked = {};
    for (const key in termsChecked) {
      updatedTermsChecked[key] = !allAgree;
    }
    setTermsChecked(updatedTermsChecked);

    const updatedSubTermsChecked = {};
    for (const key in subTermsChecked) {
      updatedSubTermsChecked[key] = !allAgree;
    }
    setSubTermsChecked(updatedSubTermsChecked);

    setAllAgree(!allAgree);
    setMarketingTerm(!allAgree);
  }

  const handleTermChange = (term) => {
    const updatedTermsChecked = {
      ...termsChecked,
      [term]: !termsChecked[term]
    };
    setTermsChecked(updatedTermsChecked);

    const isAllTermsChecked = Object.values(updatedTermsChecked).every(
      (checked) => checked);
    setAllAgree(isAllTermsChecked);
  }

  // 선택동의항목의 하위동의항목
  const [marketingTerm, setMarketingTerm] = useState(false);
  const [subTermsChecked, setSubTermsChecked] = useState({
    subTerm1: false,
    subTerm2: false,
    subTerm3: false,
    subTerm4: false,
    subTerm5: false
  });

  const handleMarketingTerm = () => {
    const newMarketingTerm = !marketingTerm;
    const updatedSubTermsChekced = {};
    setMarketingTerm(newMarketingTerm);

    for (const key in subTermsChecked) {
      updatedSubTermsChekced[key] = !marketingTerm;
    }
    setSubTermsChecked(updatedSubTermsChekced);
  }

  const handlesubTermChange = (subTerm) => {
    const updatedSubTermsChekced = {
      ...subTermsChecked,
      [subTerm]: !subTermsChecked[subTerm]
    };

    const isAllSubTermsChecked = Object.values(updatedSubTermsChekced).every(
      (checked) => checked);
    setSubTermsChecked(updatedSubTermsChekced);
    setMarketingTerm(isAllSubTermsChecked);
    if (!isAllSubTermsChecked) {
      setTermsChecked({ ...termsChecked, term10: false });
    }
  }
  // console.log('termsChecked.term10: ', termsChecked.term10);
  // console.log('marketingTerm: ', marketingTerm); 

  // 필수 동의 항목 7가지 체크
  const areAllRequiredTermsChecked = ['term1', 'term2', 'term3', 'term4', 'term5', 'term6', 'term7'].every((term) => termsChecked[term]);

  return (
    <div>
      <AccountHeader></AccountHeader>
      <div className='termContent'>
        <div className='termWrapper'>
          <div className='checkBox_allAgree'>
            <label htmlFor="allAgree">
              <input type="checkbox"
                id='allAgree'
                checked={allAgree}
                onChange={handleAllAgreeChange} />
              <span className='text'>약관 전체 동의</span>
            </label>
          </div>

          {/* 필수 동의 항목 1 */}
          <div className='termsBlock'>
            <div className='label'>필수 동의 항목</div>
            <div className="termsItem">
              <div className="checkboxDiv">
                <label htmlFor="term1">
                  <input type="checkbox"
                    id='term1'
                    checked={termsChecked.term1}
                    onChange={() => handleTermChange('term1')} />
                  <div><a href="#">[필수] 이용약관</a></div>
                </label>
              </div>
              <div className="checkboxDiv">
                <label htmlFor="term2">
                  <input type="checkbox"
                    id='term2'
                    checked={termsChecked.term2}
                    onChange={() => handleTermChange('term2')} />
                  <div><a href="#">[필수] 전자금융거래 이용약관</a></div>
                </label>
              </div>
              <div className="checkboxDiv">
                <label htmlFor="term3">
                  <input type="checkbox"
                    id='term3'
                    checked={termsChecked.term3}
                    onChange={() => handleTermChange('term3')} />
                  <div><a href="#">[필수] 개인정보 수집동의서</a></div>
                </label>
              </div>
              <div className="checkboxDiv">
                <label htmlFor="term4">
                  <input type="checkbox"
                    id='term4'
                    checked={termsChecked.term4}
                    onChange={() => handleTermChange('term4')} />
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
                <label htmlFor="term5">
                  <input type="checkbox"
                    id='term5'
                    checked={termsChecked.term5}
                    onChange={() => handleTermChange('term5')} />
                  <div><a href="#">[필수] 이용약관</a></div>
                </label>
              </div>
              <div className="checkboxDiv">
                <label htmlFor="term6">
                  <input type="checkbox"
                    id='term6'
                    checked={termsChecked.term6}
                    onChange={() => handleTermChange('term6')} />
                  <div><a href="#">[필수] 개인정보 수집동의서</a></div>
                </label>
              </div>
              <div className="checkboxDiv">
                <label htmlFor="term7">
                  <input type="checkbox"
                    id='term7'
                    checked={termsChecked.term7}
                    onChange={() => handleTermChange('term7')} />
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
                <label htmlFor="term8">
                  <input type="checkbox"
                    id='term8'
                    checked={termsChecked.term8}
                    onChange={() => handleTermChange('term8')} />
                  <div><a href="#">[선택] 개인정보 수집동의서</a></div>
                </label>
              </div>
              <div className="checkboxDiv">
                <label htmlFor="term9">
                  <input type="checkbox"
                    id='term9'
                    checked={termsChecked.term9}
                    onChange={() => handleTermChange('term9')} />
                  <div><a href="#">[선택] 위치기반 서비스 이용약관</a></div>
                </label>
              </div>
              <div className="checkboxDiv">
                <label htmlFor="term10">
                  <input type="checkbox"
                    id='term10'
                    checked={termsChecked.term10}
                    onChange={() => {
                      handleTermChange('term10');
                      handleMarketingTerm();
                    }} />
                  <div><a href="#">[선택] 제 3자 마케팅 활용동의서 전체동의</a></div>
                </label>
                {marketingTerm && (<div className='marketingSubTerm'>
                  <div className='noticeText'>쇼핑 2,000원 할인쿠폰 증정</div>
                  <div className='termsDetailContent'>
                    <div className='termsDetailBlock'>
                      <div className='title'>맞춤서비스를 위한 분야별 마케팅활용동의 선택</div>
                      <ul>
                        <li>
                          <label htmlFor="subTerm1">
                            <input type="checkbox"
                              id='subTerm1'
                              checked={subTermsChecked.subTerm1}
                              onChange={() => handlesubTermChange('subTerm1')} />
                            <span className='text'>통신</span>
                          </label>
                        </li>
                        <li>
                          <label htmlFor="subTerm2">
                            <input type="checkbox"
                              id='subTerm2'
                              checked={subTermsChecked.subTerm2}
                              onChange={() => handlesubTermChange('subTerm2')} />
                            <span className='text'>손해보험</span>
                          </label>
                        </li>
                        <li>
                          <label htmlFor="subTerm3">
                            <input type="checkbox"
                              id='subTerm3'
                              checked={subTermsChecked.subTerm3}
                              onChange={() => handlesubTermChange('subTerm3')} />
                            <span className='text'>생명보험</span>
                          </label>
                        </li>
                        <li>
                          <label htmlFor="subTerm4">
                            <input type="checkbox"
                              id='subTerm4'
                              checked={subTermsChecked.subTerm4}
                              onChange={() => handlesubTermChange('subTerm4')} />
                            <span className='text'>라이프서비스</span>
                          </label>
                        </li>
                      </ul>
                      <div className="checkboxDiv">
                        <label htmlFor="subTerm5">
                          <input type="checkbox"
                            id='subTerm5'
                            checked={subTermsChecked.subTerm5}
                            onChange={() => handlesubTermChange('subTerm5')} />
                          <span className='text'>개인정보처리 업무위탁</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>)}
              </div>
            </div>
          </div>

          {/* 다음 단계 버튼 */}
          <div className='termsSubmit'>
            <button className='termsSubmitBtn'
              disabled={!areAllRequiredTermsChecked}
              onClick={() => {
                navigate("/accountform", {state: {termsChecked}});
              }}>다음 단계</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AccountTerm