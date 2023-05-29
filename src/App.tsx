import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Favorites from 'pages/Favorites';

import Default from 'components/Layout';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Default />}>
                <Route index element={<Home />} />
                <Route path="/movies/:movieId" element={<MovieDetails />} />
                <Route path="/movies/favorites" element={<Favorites />} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
