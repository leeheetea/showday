import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../store/postSlice";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import "./ReadPost.css";

function ReadPost() {
  const { id } = useParams();
  const location = useLocation();
  const segments = location.pathname.split("/");
  const basePath = `/${segments[1]}/${segments[2]}`;

  const post = useSelector((state) =>
    state.posts.find((p) => p.id === parseInt(id))
  );

  const dispatch = useDispatch();
  const navigator = useNavigate();

  if (!post) return <p>404 NOT FOUND</p>;

  const handleDelete = () => {
    dispatch(deletePost(post.id));
    navigator(-1);
  };

  return (
    <div className="read-container">
      <h2>{post.title}</h2>
      <div>
        <p>{post.author}</p>
        <p>{post.date}</p>
      </div>
      <div style={{ whiteSpace: "pre-line" }}>{post.content}</div>
      <Link to={basePath}>
        <button type="button">전체글</button>
      </Link>
      <button type="button" onClick={handleDelete}>
        삭제하기
      </button>
    </div>
  );
}

export default ReadPost;
