import React from "react";
import { useEffect, useState , useRef} from "react";
import { Link } from "react-router-dom";

import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import ShimmerBody from "./ShimmerBody";
import { useDispatch , useSelector } from "react-redux";
import { closeMenu } from "../ReduxStore/appSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [videosBasedOnSearch , setVideosBasedOnSearch] = useState(null);
  const dispatch = useDispatch();

  async function getVideos(setVideos, YOUTUBE_API_URL) {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();

    setVideos(json?.items);

  }

  const searchRelatedVideos = useSelector((store) => store.searchResultSlice);
    
  useEffect(() => {

      if(searchRelatedVideos && searchRelatedVideos.length !==0){
        setVideos(searchRelatedVideos);
      }
      else{
         getVideos(setVideos, YOUTUBE_API_URL);
      }


  }, [searchRelatedVideos]);

  

  const closeMenuHandler = () => {
    dispatch(closeMenu());
  };

  if (videos.length === 0) {
    return <ShimmerBody />;
  }



  return (
    <div className="flex flex-wrap">
      {videos.map((video,index) => {
        console.log(video.id)
        const id = video.id.videoId !=null ? video.id.videoId  : video.id; 
        return (
          <Link
            onClick={() => closeMenuHandler()}
            to={`/watch?v=${id}`}
            key={index}
          >
            <VideoCard videoInfo={video}></VideoCard>
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
