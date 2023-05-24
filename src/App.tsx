import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';

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
