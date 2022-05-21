import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "./Home.css";
import { FiUser } from "react-icons/fi";
import { MdStarRate } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState();
  const [numPage,setNumPage]=useState(1)

  const navigate = useNavigate();
  const getAllMovies = async () => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?page=${numPage}&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`
      );

      console.log(result.data.results);
      setMovies(result.data.results);
    } catch {}
  };


  const convertToMovie = (id) => {
    navigate(`/movie/${id}`);
  };

  useEffect(() => {
    getAllMovies();
  }, [numPage]);
  return (
    <>
      <div className="container">
        {movies &&
          movies.map((element, i) => (
            <div key={i}>
              <img
                src={`https://image.tmdb.org/t/p/w500${element.backdrop_path}`}
             onClick ={()=>{
                convertToMovie(element.id)
             }}/>
              <p>{element.original_title}</p>
              <p>
                <MdLanguage /> {element.original_language}
              </p>
              <p>
                <MdStarRate /> {element.vote_average} <FiUser />{" "}
                <span>{element.vote_count}</span>
              </p>
            </div>
          ))}{" "}
      </div>{" "}


      <div className="numPage">
          {numPage>1?(<button onClick={()=>{
            setNumPage(numPage-1)
          }}>Back</button>):(<></>)} 
          
          <button onClick={()=>{
            setNumPage(numPage+1)
          }} className="btn">Next</button>
          
          </div>
    </>
  );
};

export default Home;
