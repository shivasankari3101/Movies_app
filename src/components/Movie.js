import React from 'react';
const IMG= "https://image.tmdb.org/t/p/w500/";

const Movie=({id,title,overview,poster_path})=>
<div className="Movie">
   <p>{title}</p>
   <img src={IMG+poster_path} alt=""></img>
</div>;

export default Movie;