import React, { useState, useEffect } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import "../css/ToTopButton.css";

const ToTopButton = () => {
  console.log("버튼");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 스크롤 이벤트 핸들러
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div className="to-top-icon-container" onClick={scrollToTop}>
        <BsArrowUpCircleFill className="to-top-icon" size="35" />
      </div>
    )
  );
};

export default ToTopButton;
