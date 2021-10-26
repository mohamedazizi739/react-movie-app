import './App.css';
import React, {useState,useEffect} from "react"
import NavBar from './components/NavBar'
import MoviePage from './components/MoviePage'
import Home from "./pages/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
function App() {
  
  return (
        <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movie/:id">
            <MoviePage/>
          </Route>
        </Switch>
      
    </Router>
 
  );
}


export default App;
