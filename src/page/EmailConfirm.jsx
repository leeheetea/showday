import { useState } from "react";

const EmailConfirm = ({ isOpen, onClose, onConfirm, serverCode }) => {
  const [clientCode, setClientCode] = useState("");

  const handleConfirm = () => {
    if (clientCode === serverCode) {
      onConfirm(true);
    } else {
      onConfirm(false);
    }
  };

  return (
    isOpen && (
      <div className="uBlock">
        <div className="inputArea_email">
          <label htmlFor="">이메일 인증</label>
          <input
            type="text"
            value={clientCode}
            onChange={(e) => setClientCode(e.target.value)}
            placeholder="인증코드를 입력하세요"
          />
          <button onClick={handleConfirm}>확인</button>
          <button onClick={onClose}>취소</button>
        </div>
      </div>
    )
  );
};

export default EmailConfirm;
