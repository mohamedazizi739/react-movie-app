import React from 'react'
import{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from "axios"
const InTheaters = () => {
  const History=useHistory()
 const [movieData, setMovieData] = useState([])
 useEffect(() => {
  axios({
  method: 'get',
  url: 'https://imdb-api.com/en/API/InTheaters/k_beublohr',
  }).then(res=>{setMovieData(res.data.items)}).catch((err)=>{console.log("fetch data failed")})
 }, [ ])
 return (
  <div className="gender-list">
    <div className="title">
     <h3>Movies In Theaters</h3>
    </div>
    <div className="movie-grid">
     {movieData.map((movie)=>{
      return(
       <div   key={movie.id} className={"grid-movie-container"}>
        <div onClick={()=>{History.push(`/movie/${movie.id}`)}}  className={"movie-hover"}>
         <img src="https://cdn-icons-png.flaticon.com/512/189/189638.png" alt="" />
        </div>
       <img  src={movie.image} alt="image" />
       </div>
      )
     })}
    </div>
  </div>
 )
}

export default InTheaters
