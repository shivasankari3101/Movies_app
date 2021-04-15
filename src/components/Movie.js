import React from 'react';

const IMG= "https://image.tmdb.org/t/p/w500/";

const Movie=({id,title,overview,poster_path,vote_average,release_date})=>
<div className="Movie">
   <p>{title}</p>
   <img src={IMG+poster_path} alt=""></img>
   <p className="voteaverage"><span>{vote_average}</span></p>
   <div className="overlay">
      <h1>{title}</h1>
      <p>{overview}</p>
      <p>Release date: {release_date}</p>
      <p>Vote Average: {vote_average}</p>
   </div>
  
</div>;

export default Movie;