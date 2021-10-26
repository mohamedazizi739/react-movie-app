import React from 'react'
import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import axios from 'axios'
function MoviePage() {
 const [imageUrl, setImageUrl] = useState("")
 const {id}=useParams()
 useEffect(()=>{
  axios({
   method:"get",
   url:`https://imdb-api.com/en/API/Title/k_beublohr/${id}`
  }).then(res=>{setImageUrl(res.data.image)}).catch((err)=>{console.log(err)})
 },[]) 
 return (
  <div  className={"movie-page-container"}>
   <img src={imageUrl} alt="" />
  </div>
 )
}

export default MoviePage
