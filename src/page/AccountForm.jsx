import React from 'react'
import '../components/AccountForm.css'

const AccountForm = () => {
  return (
    <div className='AccountForm'>
      <div className='AccountFormWrapper'>
        {/* 아이디 */}
        <div className='uBlock'>
          <div className="inputArea_id">
            <label htmlFor="">아이디</label>
            <input type="text" placeholder='6~20자 영문, 숫자' />
          </div>
          <div className="errorText">
            영문으로 시작하는 6~20자 영문(소문자), 숫자만 사용 가능합니다.
          </div>
        </div>

        {/* 비밀번호 */}
        <div className='uBlock'>
          <div className="inputArea_password">
            <div className='inputAreaLabel'>
              <label htmlFor="">비밀번호</label>
              <input type="password" placeholder='8~12자 영문, 숫자, 특수문자' />
            </div>
            <div>
              <button>보기</button>
            </div>
          </div>
          <div className="errorText">
            8~12자의 영문, 숫자, 특수문자 중 2가지 이상으로만 가능합니다.
          </div>
        </div>

        {/* 비밀번호 확인 */}
        <div className='uBlock'>
          <div className="inputArea_password_verify">
            <div className='inputAreaLabel'>
              <label htmlFor="">비밀번호 확인</label>
              <input type="password" placeholder='8~12자 영문, 숫자, 특수문자' />
            </div>
            <div>
              <button>보기</button>
            </div>
          </div>
          <div className="errorText">
            8~12자의 영문, 숫자, 특수문자 중 2가지 이상으로만 가능합니다.
          </div>
        </div>

        {/* 이름 */}
        <div className='uBlock'>
          <div className="inputArea_name">
            <label htmlFor="">이름</label>
            <input type="text" />
          </div>
          <div className='errorText'>
            한글과 영문 대,소문자를 사용해주세요.
          </div>
        </div>

        {/* 이메일 */}
        <div className='uBlock'>
          <div className="inputArea_email">
            <label htmlFor="">이메일</label>
            <input type="email" />
            <div>
              <label htmlFor="">
                <select name="" id="">
                  <option value="">직접입력</option>
                  <option value="">@naver.com</option>
                  <option value="">@hanmail.net</option>
                  <option value="">@gmail.com</option>
                  <option value="">@nate.com</option>
                  <option value="">@hotmail.com</option>
                </select>
              </label>
            </div>
          </div>
          <div className="errorText">
            이메일 주소 양식에 맞게 작성해주세요.
          </div>
          <div className='accountValidBlock'>
            <p className='blockText'>동일 정보로 가입된 계정으로 로그인 하시겠습니까?</p>
            <a href="#" className='accountValidBlockLogin'>로그인하기</a>
          </div>
        </div>

        {/* 휴대폰 */}
        <div className='uBlock'>
          <div className='inputArea_phone'>
            <label htmlFor="">휴대폰</label>
            <input type="tel" placeholder='010 1234 5678' />
            <button>인증번호받기</button>
          </div>
          <div className='errorText'>
            점유인증을 하여 휴대폰 번호를 등록해주세요. 등록한 번호는 로그인 이후 변경 가능합니다.
          </div>
          <div className='accountValidBlock'>
            <p className="blockText">동일 정보로 가입된 계정으로 로그인 하시겠습니까?</p>
            <a href="#" className='accountValidBlockLogin'>로그인하기</a>
          </div>
        </div>
        <div className="uBlock">
          <div className='uBlock_certification'>
            <div className='inputArea'>
              <div>
                <label htmlFor="">인증번호</label>
                <input type="text" />
                <button>삭제</button>
              </div>
              <div>
                <button>재발송</button>
                <button>확인</button>
              </div>
            </div>
            <div className='certifyTime'>
              인증유효시간<span className='time'>00:00</span>
            </div>
          </div>
        </div>

        {/* 선택 체크박스 */}
        <div className='uBlock_checkBlock'>
          <div className='checkBox'>
            <label htmlFor="">
              <input type="checkbox" />
              <span>SMS, 이메일로 상품 및 이벤트 정보를 받겠습니다.(선택)</span>
            </label>
          </div>
          <div className='checkBox'>
            <label htmlFor="">
              <input type="checkbox" />
              <span>14세 미만입니다.</span>
            </label>
          </div>
          <div className='errorText'>
            14세 미만 가입시 법정대리인 동의 필수입니다.
          </div>
        </div>
        <div className='uBlock'>
          <p>만 14세 미만 회원은 법정대리인(부모님) 동의를 받은 경우만 회원가입 가능합니다.</p>
        </div>

        {/* 만 14세 미만 법정대리인 이름 */}
        <div className='uBlock_under14'>
          <div className="inputArea_name">
            <label htmlFor="">이름</label>
            <input type="text" />
          </div>
          <div className='errorText'>
            한글과 영문 대,소문자를 사용해주세요.
          </div>
        </div>

        {/* 만 14세 미만 법정대리인 이메일 */}
        <div className='uBlock_under14'>
          <div className="inputArea_email">
            <label htmlFor="">이메일</label>
            <input type="email" />
            <div>
              <label htmlFor="">
                <select name="" id="">
                  <option value="">직접입력</option>
                  <option value="">@naver.com</option>
                  <option value="">@hanmail.net</option>
                  <option value="">@gmail.com</option>
                  <option value="">@nate.com</option>
                  <option value="">@hotmail.com</option>
                </select>
              </label>
            </div>
          </div>
          <div className="errorText">
            이메일 주소 양식에 맞게 작성해주세요.
          </div>
          <div className='accountValidBlock'>
            <p className='blockText'>동일 정보로 가입된 계정으로 로그인 하시겠습니까?</p>
            <a href="#" className='accountValidBlockLogin'>로그인하기</a>
          </div>
        </div>

        {/* 만 14세 미만 법정대리인 가입동의받기 */}
        <div className='uBlock_agreeBlock'>
          <div className="inputArea">
            <div className='agreeBlock'>
              <span>가입동의받기</span>
              <button>법정대리인 본인 인증</button>
            </div>
          </div>
        </div>

        {/* 개인정보 유효기간 */}
        <div className='uBlock_validation'>
          <div className='uBlock_validation_bold'>개인정보 유효기간</div>
          <div className='radioBoxWrapper'>
            <div className='radioBox'>
              <label htmlFor="">
                <input type="radio" name='radio' />
                <span>탈퇴 시까지</span>
              </label>
            </div>
            <div className='radioBox'>
              <label htmlFor="">
                <input type="radio" name='radio' />
                <span>1년</span>
              </label>
            </div>
          </div>
          <div className='noticeText'>개인정보 유효기간 경과 이후 파기 또는 분리저장, 관리합니다.</div>
        </div>

        {/* 가입완료 버튼 */}
        <div className='submitBtn'>
          <button disabled>가입완료</button>
        </div>

      </div>
    </div>
  )
}

export default AccountForm