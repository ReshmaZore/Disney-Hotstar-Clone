import axios from 'axios'

const MovieBaseUrl = "https://api.themoviedb.org/3"
const api_key='302b4eedc19c9c9ad154d28e3e8d28dd'

// https://api.themoviedb.org/3/trending/all/day?api_key=302b4eedc19c9c9ad154d28e3e8d28dd

const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}