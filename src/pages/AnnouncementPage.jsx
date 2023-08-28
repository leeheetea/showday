import React from "react";
import SimpleBoard from "../components/board/SimpleBoard";
import "../css/AnnouncementPage.css";

const AnnouncementPage = () => {
  const postSelector = (state) => state.posts;

  return (
    <div className="announcement-contianer">
      <div>
        <h1>공지사항</h1>
      </div>
      <SimpleBoard selector={postSelector} />
    </div>
  );
};

export default AnnouncementPage;
