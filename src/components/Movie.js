import React from 'react';
const IMG= "https://image.tmdb.org/t/p/w500/";

const Movie=({title,overview,poster_path})=>
<div className="Movie">
   <p>{title}</p>
   <img src={IMG+poster_path} alter={title}></img>
</div>;

export default Movie;