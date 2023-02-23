import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieList.css'

const BASE_URL = 'http://localhost:3001';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch movies with multiple actors
    axios
      .get(`${BASE_URL}/movies/multiple-actors`)
      .then((response) => setMovies(response.data))
      .catch((error) => setError(error.response.data));
  },[]);

  return (
    <>
      <div className="MovieListMain">
        <div className="MovieList">
          <h1>Movies with Multiple Actors</h1>
          {movies.length > 0 ? (
            <ul>
              {movies.map((movie) => (
                <li key={movie.Mov_id}>{movie.Mov_Title}</li>
              ))}
            </ul>
          ) : (
            <p>No movies found.</p>
          )}
        </div>
        <div className="MovieList2"></div>
      </div>
    </>
  );
}

export default MovieList;
