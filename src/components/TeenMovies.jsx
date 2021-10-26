import React from 'react'
import {useEffect,useState} from "react"
import axios from "axios"
const TeenMovies = () => {
 
 const [page, setPage] = useState(1)
 const [movieData, setMovieData] = useState([])
 const [load, setLoad] = useState(false)
 const [dataAvailable, setDataAvailable] = useState(true)
 const getData=(page)=>{
  setLoad(true)
  axios({
   method:"get",
   url:`https://www.omdbapi.com/?apikey=674ff91b&s=teen&page=${page}`
  }).then((res)=>{
   setMovieData([...movieData,...res.data.Search]);
   if(page===Math.ceil(res.data.totalResults/10)){setDataAvailable(false)};
   setLoad(false)}
  ).catch(err=>{console.log(err);setLoad(false)})
 }
 useEffect(() => {
  getData(page)
 }, [page])

 return (
  <div className="gender-list">
    <div className="Title">
     <h3>Teenagers Movies</h3>
    </div>
    <div className="movie-grid">
     {movieData.map((movie)=>{
      return(
       <div  key={movie.imdbID} className={"grid-movie-container"}>
        <div  className={"movie-hover"}>
         <img src="https://cdn-icons-png.flaticon.com/512/189/189638.png" alt="Not available" />
        </div>
       <img  src={movie.Poster} alt="" />
       </div>
      )
     })}
    </div>
   {dataAvailable===true?<button className={"showBtn"} onClick={()=>{setPage(page+1)}}>{load===true?"Loding...":"Show more"}</button>:null}
  </div>
 )
}

export default TeenMovies
