import React from 'react'
import Slider from '../components/Slider'
import SlideDescription from '../components/SiteDescription'
import InTheaters from "../components/InTheaters"
import TeenMovies from '../components/TeenMovies'
function Home() {
 return (
  <div>
   <Slider/>
   <div style={{padding:"20px"}}>
   <SlideDescription/>
   <InTheaters/>
   <TeenMovies/>
   </div>
  </div>
 )
}

export default Home
