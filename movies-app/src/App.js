import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";

import Home from './component/Home/Home'
import MovieDetails from './component/MovieDetails/MovieDetails'
function App() {
  
  return (<>
    <div className="App">
     <h1>movies app</h1>
    </div>

    <Routes>  

      <Route path='/' element={ <Home/>}/>
      <Route path='/movie/:id' element={<MovieDetails/>} />
    </Routes>
    </>
  );
}

export default App;
