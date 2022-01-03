import React, {useEffect, useRef, useState} from "react";
import {likeList_modal} from "../../../../redux/modal/modalSlice";
import HeaderSearchResult from "./HeaderSearchResult";
import "../Header.scss";
import {useDispatch, useSelector} from "react-redux";
import {headerSearch} from "../../../../redux/search/search";
import HeaderSearchCard from "./HeaderSearchCard";


const HeaderSearch = () => {
  const dispatch = useDispatch();

//인풋창 클릭 후 검색결과창 나오게 하는 함수
  //만약 인풋창 밖을 클릭했을 경우 검색결과창이 닫힐 수 있게 외부클릭 감지도 넣어줌.
  const [activeSearch, SetActiveSearch] = useState(false);

  const activeSearchOnClick = () => {
    SetActiveSearch(true);

  }
  function SearchOutsideClick(ref) {
   useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          SetActiveSearch(false);
          SetSearchBefore(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const searchSideRef = useRef(null);
  SearchOutsideClick(searchSideRef);

  //검색어 입력
  const [searchText, SetSearchText] = useState();
  const [searchBefore, SetSearchBefore] = useState(false);
  const searchTextOnChange = (e) =>{
    SetSearchText(e.target.value);
  }

  //엔터로 검색
  const searchEnter = (e) =>{
    if(e.key==='Enter'){
      let searchResult = searchText && searchText.replace('#', '%23');
      dispatch(headerSearch({
        searchResult
      }))
      SetSearchBefore(true);
    }
  }

  return(
    <>
      <label className="header_search" onClick={activeSearchOnClick}  ref={searchSideRef}>
      <input placeholder="검색" onKeyPress={searchEnter} onChange={searchTextOnChange} />
        {activeSearch&&
        <div className="active_input">
          <div>
            {!searchBefore && <div>검색전</div>}

            {searchBefore&&
            <div><HeaderSearchResult/></div>}
          </div>

        </div>}
      </label>
    }
    </>
  )
}

export default HeaderSearch;
