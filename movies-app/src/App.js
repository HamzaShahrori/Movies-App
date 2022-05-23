import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./component/Home/Home";
import NavBar from "./component/NavBar/NavBar";
import Favorite from "./component/Favorite/Favorite";

import MovieDetails from "./component/MovieDetails/MovieDetails";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
