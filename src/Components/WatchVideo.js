import React, { useEffect , useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_API_COMMENTS } from "../utils/constants";

import SideBar from "./SideBar"
import CommentList from "./CommentList";

const WatchVideo = () => {
  const [params] = useSearchParams();
  console.log(params)
  const videoId = params.getAll("v")[0];

  console.log(JSON.stringify(videoId,null,2));

  const [comments , setComments] = useState(null)

  useEffect( ()=>{
    fetchComments();
  },[])
  async function fetchComments(){
    const data = await fetch(YOUTUBE_API_COMMENTS+videoId);
    const json = await data.json();
    console.log(json);
    //console.log(json?.items)
    setComments(json?.items);
  }
  return (
    <div className="flex">
        <SideBar />
      <div className="flex flex-col ">
          <iframe
            className="pl-10 pt-10 ml-10"
            width="650"
            height="400"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            
          ></iframe>

          <div className="pl-10 pt-10 ml-10 ">
            <CommentList  items={comments}></CommentList>
          </div>
      </div>
      
    </div>
  );
};

export default WatchVideo;
