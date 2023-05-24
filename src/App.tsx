import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/home/Home';
import MovieDetails from 'pages/details/MovieDetails';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
