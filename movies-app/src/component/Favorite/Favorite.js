import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Favorite.css";
import { useNavigate } from "react-router-dom";
import { ImHeartBroken } from "react-icons/im";

const Favorite = () => {
  const navigate = useNavigate();

  useEffect(() => {}, [Object.keys(localStorage).length]);

  return (
    <>
      <div className="containerFavorite">
        {Object.keys(localStorage).map((element, i) => (
          <div className="containerFavoriteMovie">
            <img
              className="movieImg"
              src={`https://image.tmdb.org/t/p/w500${localStorage.getItem(
                element
              )}`}
              onClick={() => {
                navigate(`/movie/${element}`);
              }}
            />
            <ImHeartBroken
              onClick={() => {
                localStorage.removeItem(element);
                navigate("/favorite")
              }}
              className="ImHeartBroken"
              title="Remove from favorites"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Favorite;
