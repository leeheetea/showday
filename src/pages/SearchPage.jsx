import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import "../css/SearchPage.css"
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { getSearchShow } from '../page/ApiService';

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  // const searchKeyword = searchParams.get('keyword');
  const searchType = searchParams.get('type'); 
  const navigator = useNavigate();

  const [searchItems, setSearchItems] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState(searchParams.get('keyword'));

  useEffect(() => {
    fetchSearchItems();
  }, []);

  const fetchSearchItems = ()=>{
    const type = searchType === 'all' ? '' : searchType;
    const searchUrl = `/search?keyword=${searchKeyword}&type=${type}`;
    getSearchShow(searchUrl)
    .then((res)=>{
      console.log(res);
      setSearchItems(res);
    }).catch((err)=>{
      console.error("검색 서치 중 오류가 발생했습니다.", err);
    })
  }
  
  

  return (
    <div>
      <Header/>
      <div className='searchPageContainer'>
        <div className='tx_result'>
          <h3>검색결과</h3>
          <p><span className='red'>"{searchType}"</span></p>
          <p><span className='red'>"{searchKeyword}"</span>에 대한 
            검색 결과는 총 <span className='red'>{searchItems.length}</span>건 입니다.</p>
        </div>
        
        <div className='detail_box_top'>
          <ul>
            {searchItems.map(result => (
              <li className='result_lst' key={result.showId} onClick={() => navigator("/detailpage/"+result.showId)}>
                <div className='result_box'>
                  <span className='img_box'>
                    <img className="searchImg" src={result.thumbnailUrl} alt="img" />
                  </span>
                  <div className='box_text'>
                    <div className='title'>
                      <strong>{result.title}</strong>
                    </div>
                    <dl>
                      <dt>장 소:</dt>
                      <dd>{result.venueName}</dd>
                      <dt>기 간:</dt>
                      <dd>{result.period}</dd>
                      <dt>가 격:</dt>
                      <dd>{result.price}</dd>
                    </dl>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SearchPage;
