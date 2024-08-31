import React, { useEffect } from 'react'
import { useState } from 'react'
const Sample = () => {

    const [count, setCount] = useState(0); 

    useEffect(() =>{

        console.log("empty before")
        return ()=>{
            console.log('Empty [] useEffect ')
        }
    },[])

    useEffect(() =>{

        console.log("count before")
        return ()=>{
            console.log('[Count] useEffect ')
        }

    },[count])
  return (
    <div><h1>
        {count}
        </h1>
        <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
    </div>
  )
}

export default Sample