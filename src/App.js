import { useEffect, useState } from 'react';
import './App.css';
import Movie from "./components/Movie";

const API= "https://api.themoviedb.org/3/discover/movie?api_key=fa89a5a01830500758ccda34c5a144c9&sort_by=popularity.desc&page=1";

function App() {
  const [movies,setMovies]=useState([]);
  useEffect(()=>{
    fetch(API)
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data);
        setMovies(data.results);
      });
  },[]);
  // const movies=[1,2,3,4,5];
  return (
    <div className="App">
    <header className="header"><h1>MOVIES APP</h1></header>
     <div className="movie_container">
       {movies.map((movie)=>(
         <Movie key={movie.id} {...movie}/>
       ))}
      </div>
    </div>
  );
}

export default App;

	
