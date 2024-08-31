export const YOUTUBE_ICON_URL = "https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"

const YOUTUBE_API_KEY1 ="AIzaSyB9uuWg1AO5nWiunCwLS3yGka4rIQMhTg0";
const YOUTUBE_API_KEY2 ="AIzaSyDO9aIkiNggP3mxOV7avg3L1a-sYqAXBDA";                        
export const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOUTUBE_API_KEY2}`;

export const YOUTUBE_SEARCH_SUGGESTIONS = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`

export const YOUTUBE_API_COMMENTS = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&key=${YOUTUBE_API_KEY2}&videoId=`

// export const YOUTUBE_API_COMMENTS = `https://www.googleapis.com/youtube/v3/commentThreads?key=${YOUTUBE_API_KEY2}&maxResults=100&textFormat=plainText&part=snippet&videoId=`
