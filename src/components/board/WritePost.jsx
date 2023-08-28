import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/postSlice";
import { useNavigate } from "react-router-dom";
import "./WritePost.css";

function WritePost() {
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
    dispatch(addPost(post));
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
          <label>작성자: </label>
          <input value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <label>내용: </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
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
  );
}

export default WritePost;
