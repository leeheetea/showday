import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./SimpleBoard.css";

function SimpleBoard() {
  const posts = useSelector((state) =>
    state.posts.slice().sort((a, b) => b.id - a.id)
  );

  // 페이징에 필요한 상태 정의
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // 현재 페이지의 게시글 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 페이지 변경 함수
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="board">
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성날짜</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post, index) => (
            <tr key={post.id}>
              <td>{index + 1 + (currentPage - 1) * postsPerPage}</td>
              <td>
                <Link to={`./read/${post.id}`}>{post.title}</Link>
              </td>
              <td>{post.author}</td>
              <td>{post.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button type="button" onClick={prevPage} disabled={currentPage === 1}>
          이전
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button
          type="button"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          다음
        </button>
      </div>
      <Link to="./write" className="write-button">
        글쓰기
      </Link>
    </div>
  );
}

export default SimpleBoard;
