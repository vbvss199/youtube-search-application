import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../ReduxStore/appSlice.js";
import { cacheResults } from "../ReduxStore/cacheSlice.js";
import { addSearchResultToStore } from "../ReduxStore/SearchResultSlice.js";

import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiUserCircle } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { YOUTUBE_ICON_URL } from "../utils/constants";
import { YOUTUBE_SEARCH_SUGGESTIONS } from "../utils/constants";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const previousSearches = useSelector((store) => store.cache);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      if (previousSearches[searchText]) {
        console.log("cached result , skipped api call ");

        setSuggestions(previousSearches[searchText]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);


  async function getVideosBasedOnSearch(){

    const data = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDZp_COq8hBzXEJdHDXS0bGfzzG3dkGT8c&type=video&part=snippet&maxResults=10&q=${searchText}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        // Include any other custom headers that your server requires
      },
    })
    const json = await data.json();
    dispatch(addSearchResultToStore(json?.items));

  }
  async function getSearchSuggestions() {
    console.log("made an api call");
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS + searchText);
    const json = await data.json();
    setSuggestions(json[1]);

    //cache the fetched result
    /**
     * {
     * searchQuery : [],
     * searchQuery : [],
     * }
     */

    dispatch(
      cacheResults({
        [searchText]: json[1],
      })
    );
  }
  return (
    <div className="grid grid-cols-12 grid-flow-col shadow-lg items-center">
      <RxHamburgerMenu
        onClick={() => toggleMenuHandler()}
        size={40}
        className="col-span-1 m-auto cursor-pointer"
      ></RxHamburgerMenu>
      <Link to="/" className="w-28 cursor-pointer col-span-2 items-center justify-self-start"><img
        
        src={YOUTUBE_ICON_URL}
        alt="Youtube - icon "
      /></Link>
      <div className=" justify-start col-span-8 ">
        <div className="flex">
          <input
            onBlur={()=>setTimeout(() => {
              setShowSuggestions(false)

            }, 300)}
            onFocus={() => setShowSuggestions(true)}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="You can Search here "
            className="focus:bg-slate-50 border border-black px-3 py-1  h-10 w-[500px] rounded-l-full"
          />
          <Link to="/"><button onClick={()=> getVideosBasedOnSearch()} className="bg-gray-200  px-3  text-lg w-20 h-10  rounded-r-full border border-black">
            Search
          </button></Link>
        </div>
        {showSuggestions && <div className="absolute ">
          <ul>
            {suggestions &&
              suggestions.map((suggestion,index) => {
                return (
                  <Link key={index} to="/"><li
                    
                    onClick={()=>{ 
                      console.log("li item clicked"+suggestion)
                      setSearchText(suggestion)
                      getVideosBasedOnSearch()
                       }
                    }
                    className="hover:bg-gray-200 px-3 mx-3  py-1 cursor-pointer  bg-gray-100 shadow-lg border border-gray-50 w-[490px]"
                  >
                    {suggestion}
                  </li></Link>
                );
              })}
          </ul>
        </div>}
      </div>

      <IoIosNotificationsOutline
        className="col-span-1 m-auto justify-self-end"
        size={40}
      ></IoIosNotificationsOutline>
      <HiUserCircle
        className="col-span-1 m-auto mr-7 justify-self-end"
        size={40}
      ></HiUserCircle>
    </div>
  );
};

export default Header;
