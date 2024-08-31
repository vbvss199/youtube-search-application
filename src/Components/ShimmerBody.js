import React from 'react'
import Shimmer from './Shimmer';

const ShimmerBody = () => {
    const array = new Array(10);
    array.fill(10);
  return (
    <div className='flex flex-wrap'>
        {array.map((item , index) => {
            return <Shimmer key={index}></Shimmer>
        })}
    </div>
  )
}

export default ShimmerBody