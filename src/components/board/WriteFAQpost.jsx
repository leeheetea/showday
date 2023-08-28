import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFAQPost } from "../../store/faqSlice";
import { useNavigate } from "react-router-dom";
import "./WritePost.css";

function WriteFAQpost() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handleSubmit = () => {
    const post = {
      id: Date.now(),
      title,
      author,
      content,
      date: new Date().toISOString().split("T")[0],
    };
    dispatch(addFAQPost(post));
    navigator(-1);
  };

  return (
    <div>
      <div className="write-container">
        <div>
          <label>제목: </label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>종류: </label>
          <input value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <label>내용: </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="write-button-container">
          <button onClick={handleSubmit}>작성하기</button>
          <button
            onClick={() => {
              navigator(-1);
            }}
          >
            작성취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default WriteFAQpost;
