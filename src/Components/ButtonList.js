import React from 'react'
import Button from "./Button"
import { useDispatch } from 'react-redux'
import { addSearchResultToStore } from '../ReduxStore/SearchResultSlice'

const ButtonList = () => {
  const dispatch = useDispatch();
  let suggestionList = ["Music","Gaming","News", "Live","Sports","Fashion","Explore","Trending","Science","Programming"]
  
  return (
    <div className='flex mt-1 mx-2 shadow-lg'>
      {
        suggestionList.map((suggestion , index)=>{
            return <Button  key={index} name ={suggestion}></Button>
        })
      }
      
    </div>
  )
}

export default ButtonList