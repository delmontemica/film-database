import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/home/Home';
import MovieDetails from 'pages/details/MovieDetails';
import Default from 'components/layout/Default';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Default />}>
                <Route index element={<Home />} />
                <Route path="/movies/:movieId" element={<MovieDetails />} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
