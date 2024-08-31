import React from 'react'

const VideoCard = ({videoInfo}) => {
  return (
    <div className='rounded-xl shadow-2xl w-[280px] mx-3 px-3 my-5 h-60'>
      <img className='rounded-xl' src={videoInfo?.snippet?.thumbnails?.medium?.url} alt="Thumbnail" />
      <div className='pb-2'>
        <h1 className='font-bold text-sm'>{videoInfo?.snippet?.title}</h1>
        <h1 className='text-xs mt-1'>Published At {videoInfo?.snippet?.publishedAt}</h1>
      </div>
    </div>
  )
}

export default VideoCard