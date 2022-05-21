import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MovieDetails.css";

import { useParams } from "react-router-dom";

const MovieDetails = () => {

const [movie,setMovie]=useState()


    const {id} =useParams()
console.log(id);

  const getMovieById = async () => {
    try {
      const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`);

      console.log(result.data);
      setMovie(result.data)
    } catch {}
  };


  console.log(movie);
  useEffect(() => {
    getMovieById();
  }, []);
  return <>



  {movie?(<>  <div className="containerMovie">

<div className="poster" ><img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/></div>

<div className="movieDetails">
    
    <h3>{movie.title}</h3>
    <p>{movie.overview}</p>
     </div>
  </div></>):(<></>)}

  </>;
};

export default MovieDetails;
