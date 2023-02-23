import React, { useState, useEffect } from 'react';
import './MovieRating.css';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

function MovieRatings() {
  const [ratings, setRatings] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Fetch movie ratings
    axios
      .get(`${BASE_URL}/movies/ratings`)
      .then((response) => setRatings(response.data))
      .catch((error) => setError(error.response.data));
  }, []);
  return (
    <div className="MovieRatingMain">
      <div className="movieRating">
        <h1>Movie Ratings</h1>
        {ratings.length > 0 ? (
          <ul>
            {ratings.map((rating) => (
              <li key={rating.Mov_id}>
                {rating.Mov_Title}: {rating.Max_Stars} stars
              </li>
            ))}
          </ul>
        ) : (
          <p>No ratings found.</p>
        )}
      </div>
      <div className="movieRating2"></div>
    </div>
  );
}

export default MovieRatings;
