import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieSearch.css';

const BASE_URL = 'http://localhost:3001';

function MovieSearch() {
  const [director, setDirector] = useState('');
  const [movies, setMovies] = useState([]);
  const [moviesByJames, setMoviesByJames] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   // Fetch movies directed by 'james_cameron'
  //   axios
  //     .get(`${BASE_URL}/movies/james_cameron`)
  //     .then((response) => setMoviesByJames(response.data))
  //     .catch((error) => setError(error.response.data));
  // });

  const getMoviesByJames = () => {
    axios
      .get(`${BASE_URL}/movies/james_cameron`)
      .then((response) => {
        setMoviesByJames(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDirectorChange = (event) => {
    setDirector(event.target.value);
  };

  const handleSearch = () => {
    axios
      .get(`http://localhost:3001/movies/director?name=${director}`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="main">
        <div className="movie_by_james">
          <h1>Movies Directed by james_cameron</h1>
          {moviesByJames.length > 0 ? (
            <ul>
              {moviesByJames.map((movie) => (
                <li key={movie.Mov_id}>{movie.Mov_Title}</li>
              ))}
            </ul>
          ) : (
            <p>Click Below To Get Movies</p>
          )}
          <button className="button" onClick={getMoviesByJames}>
            getMoviesByJames
          </button>
        </div>

        <div className="movieSearch">
          <h1>Movie Search</h1>
          <div className="movieSearchContent">
            <input
              type="text"
              className="user"
              placeholder="Search By Director Name"
              required={true}
              value={director}
              onChange={handleDirectorChange}
            />

            <button className="button" onClick={handleSearch}>
              Search
            </button>
          </div>
          <ul>
            {movies.map((movie) => (
              <li key={movie.Mov_Title}>{movie.Mov_Title}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default MovieSearch;
