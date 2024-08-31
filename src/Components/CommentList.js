import React from "react";

import { HiUserCircle } from "react-icons/hi";

const CommentList = ({ items }) => {
  if(items && items.length>0)
      items.shift();
  return (
    <div className="h-[300px] overflow-y-auto shadow-2xl border border-gray-300">
      {items &&
        items.map((item, index) => {
          return <Comment key={index} item={item}></Comment>;
        })}
    </div>
  );
};

const Comment = ({ item }) => {
  const authorName = item?.snippet?.topLevelComment?.snippet?.authorDisplayName;
  const comment = item?.snippet?.topLevelComment?.snippet?.textDisplay;
  const likeCount = item?.snippet?.topLevelComment?.snippet?.likeCount;
  let authorProfileUrl =
    item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl;
  const replies = item?.replies;
  if(replies){
    console.log(replies)
  }
  //console.log(item?.snippet?.topLevelComment?.snippet?.textDisplay)
  return (
    <div className="flex border-l border-black max-w-screen-md ">
      <div className="flex-shrink-0">
        <img
          src={authorProfileUrl}
          alt="AI"
          className="w-16 rounded-full m-auto mr-10"
        />
      </div>
      <div  className="flex-shrink-0">
        <h1 className="font-bold">{authorName}</h1>
        <div>
            <h1 >{comment}</h1>
        </div>
        <h1>Likes : {likeCount} </h1>
        { replies && <CommentList items = {replies.comments}/>}
      </div>
    </div>
  );
};

export default CommentList;
