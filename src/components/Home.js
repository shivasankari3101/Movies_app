import { useEffect, useState } from 'react';

import Movie from "./Movie";
import Info from "./Info";



const API= "https://api.themoviedb.org/3/discover/movie?api_key=fa89a5a01830500758ccda34c5a144c9&sort_by=popularity.desc&page=1";
const SEARCH="https://api.themoviedb.org/3/search/movie?api_key=fa89a5a01830500758ccda34c5a144c9&query=";
function Home() {
  const [movies,setMovies]=useState([]);
  const [Search_term,setsearchterm]=useState("");
  useEffect(()=>{
    fetch(API)
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data);
        setMovies(data.results);
      });
  },[]);
  const handleOnSubmit=(e)=>{
     e.preventDefault();
     if(Search_term){
       fetch(SEARCH+Search_term)
         .then((res)=>res.json())
         .then((data)=>{
           setMovies(data.results);
         })
       setsearchterm("");
     }
  };

  const handleOnChange=(e)=>{
    setsearchterm(e.target.value);
  }
  // const movies=[1,2,3,4,5];
  return (
    <div className="Home">
    <header className="header"><h1>MOVIES APP</h1></header>
    <form onSubmit={handleOnSubmit} className="form">
       <input
         className="search"
         type="text"
         placeholder="Search"
         value={Search_term}
         onChange={handleOnChange}
       >
       </input>
    </form>
     <div className="movie_container">
       {movies.map((movie)=>(
         <Movie key={movie.id} {...movie}></Movie>
       ))}
      </div>
     
    </div>
  );
}

export default Home;

	
