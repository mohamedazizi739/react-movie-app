import React from 'react'
import {useRef,useEffect,useState} from "react"
import {useHistory, Link} from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import axios from "axios"

const NavBar = () => {
const History=useHistory()
const inputRef=useRef()
 const [searchValue, setSearchValue] = useState('')
 const [searchList, setSearchList] = useState([])
 const searchF=()=>{
  if(inputRef.current===document.activeElement &&  searchValue){
     
  axios({
  method: 'get',
  url: `https://imdb-api.com/en/API/SearchMovie/k_beublohr/${searchValue}`,
  }).then(res=>{if(res.data.results){setSearchList(res.data.results);}
     else{
        setSearchList([])
     }
     
   }).catch((err)=>{console.log("fetch data failed")})
    }else{setSearchList([])}
  }

 useEffect(() => {
 const t = setTimeout(searchF, 700);
 
 return () => clearTimeout(t)
 }
 , [searchValue])
 const setHome=()=>{History.push('/')}
 return (
  <div id="navbar">
     <div onClick={setHome} id="logo">
     <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Disney_cinema_logo.png" alt="" />
     </div>
      
      <nav>
       <button onClick={setHome}>HOME</button>
       <button>GENRE</button>
       <button>COUNTRY</button>
       <button>CONTACT</button>
       <button>REQUESTS</button>
      </nav>
      <div id="search">
         <div className="search-list">
         {searchList.map((movie,i)=>{
            return(
            <div
             style={i%2==0?{backgroundColor:"rgba(87, 91, 97, 0.2)"}:{}} 
             key={movie.id} 
             className={"movie-search-wrapper"}
            onClick={()=>{History.push(`/movie/${movie.id}`)}}
            > 
            
            <img  src={movie.image} alt="" />
            <div className={"movie-dearch-desc"}>
              <h6 >{movie.title}</h6>
              <span >{`Description : ${movie.description}`}</span>
            </div>
            </div>
            )
         })}
         </div>
         <input 
         ref={inputRef}
         placeholder={"Search"}
         onChange={(e)=>{setSearchValue(e.target.value)}}
         onBlur={()=>{setTimeout(()=>{setSearchList([])},300)}}
          />
         <FaSearch   className={"iconSearch"} />  
      </div>
      
       
  </div>
 )
}

export default NavBar
