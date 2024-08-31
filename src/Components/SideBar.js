import React from "react"
import { useSelector } from "react-redux";
const SideBar = () => {
    const menuVisibility = useSelector((store) => store.app.menuVisibility)

    //early return 
    if(!menuVisibility){
        return null ; 
    }

    return (
        <div className="h-screen overflow-y-auto shadow-lg p-6 border border-slate-400 flex-item flex-shrink-0 w-[220px] z-20">
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>
            <div className="min-w-full h-[1px] border border-gray-600 my-2"></div>
            <ul>
                <li>Library</li>
                <li>History</li>
                <li>Your Videos</li>
                <li>Watch later</li>
                <li>Liked Videos</li>
            </ul>
            <div className="min-w-full h-[1px] border border-gray-600 my-2"></div>
            <h1 className="font-bold">Explore</h1>
            <ul>
                <li>Trending</li>
                <li>Shopping</li>
                <li>music</li>
                <li>Movies</li>
                <li>Live</li>
                <li>Gaming</li>
                <li>News</li>
                <li>News</li>
                <li>Sports</li>
                <li>Current Affairs</li>
                <li>Learning</li>
                <li>Fashion & Beauty</li>
            </ul>

        </div>
    )
}

export default SideBar;