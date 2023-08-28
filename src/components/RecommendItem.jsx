import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useRankingType } from "../store/RankingTypeContext";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/RecommendItem.css";

const RecommendItem = () => {
  const section = useLocation();
  const pathname = section.pathname.split("/")[1];

  const musicals = useSelector((state) => state.musicals);
  const concerts = useSelector((state) => state.concerts);
  const theatres = useSelector((state) => state.theatres);

  const sortedMusicals = useMemo(() => {
    return [...musicals].sort((a, b) => a.title.localeCompare(b.title));
  }, [musicals]);

  const sortedConcerts = useMemo(() => {
    return [...concerts].sort((a, b) => a.title.localeCompare(b.title));
  }, [concerts]);

  const sortedTheatres = useMemo(() => {
    return [...theatres].sort((a, b) => a.title.localeCompare(b.title));
  }, [theatres]);

  const { setRankingType } = useRankingType();
  const navigator = useNavigate();

  const [items, setItems] = useState(sortedMusicals);

  useEffect(() => {
    setRankingType(pathname);
    switch (pathname) {
      case "musical":
        setItems(sortedMusicals);
        break;
      case "concert":
        setItems(sortedConcerts);
        break;
      case "theatre":
        setItems(sortedTheatres);
        break;
      default:
        setItems(sortedMusicals);
    }
  }, [
    pathname,
    setRankingType,
    sortedConcerts,
    sortedMusicals,
    sortedTheatres,
  ]);

  return (
    <>
      <div className="recommend-item-grid">
        {items.map((item, index) => (
          <div className="recommend-item-container" key={index}>
            <img
              onClick={() => navigator("/detailpage/" + item.id)}
              className="recommend-item"
              src={item.url}
              alt=""
            />
            <span className="recommend-item-title">{item.title}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecommendItem;
