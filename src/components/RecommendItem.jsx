import React, { useEffect, useState, useMemo } from "react";
import { useRankingType } from "../store/RankingTypeContext";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/RecommendItem.css";
import axios from "axios";

const RecommendItem = () => {

  let page = 0;
  let size = 12;
  const section = useLocation();
  const pathname = section.pathname.split("/")[1];

  const [musicals, setMusicals] = useState([]);
  const [concerts, setConcerts] = useState([]);
  const [theatres, setTheatres] = useState([]);

  useEffect(() => {
    const fetchShow = async () => {
      const url = "http://localhost/show";
      try {
        const response = await axios.get(url, {
          params: {
            type: 'musical',
            page: page,
            size: size
          }
        });
        console.log("musicalR", response.data)
        setMusicals(response.data);
      } catch (error) {
        console.error('musical 정보 호출에 에러가 발생함.', error);
      }
      try {
        const response = await axios.get('/show', {
          params: {
            type: 'concert',
            page: page,
            size: size
          }
        });
        setConcerts(response.data);
        console.log("concertR", response.data)
      } catch (error) {
        console.error('concert 정보 호출에 에러가 발생함.', error);
      }
      try {
        const response = await axios.get('/show', {
          params: {
            type: 'theatre',
            page: page,
            size: size
          }
        });
        setTheatres(response.data);
        console.log("theatreR", response.data)
      } catch (error) {
        console.error('Theatres 정보 호출에 에러가 발생함.', error);
      }
    };
    fetchShow();
  }, []);

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
              onClick={() => navigator("/detailpage/" + item.showId)}
              className="recommend-item"
              src={item.thumbnailUrl}
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
