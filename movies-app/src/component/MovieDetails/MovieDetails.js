import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MovieDetails.css";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const [numFavorite, setNumFavorite] = useState(0);

  const { id } = useParams();

  const getMovieById = async () => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`
      );

      setMovie(result.data);
    } catch {}
  };

  useEffect(() => {
    getMovieById();
  });
  return (
    <>
      {movie ? (
        <>
          {" "}
          <div className="containerMovie">
            <div className="poster">
              <img className="imgMovie"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              />
            </div>

            <div className="movieDetails">
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              <p>Publish :{movie.release_date}</p>

              {localStorage.getItem(movie.id) ? (
                <MdFavorite
                  className="MdFavorite"
                  onClick={() => {
                    localStorage.removeItem(movie.id);
                  }}
                />
              ) : (
                <MdFavoriteBorder
                  className="MdFavoriteBorder"
                  title="Add to favorites "
                  onClick={() => {
                    localStorage.setItem(movie.id, movie.backdrop_path);
                  }}
                />
              )}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default MovieDetails;
