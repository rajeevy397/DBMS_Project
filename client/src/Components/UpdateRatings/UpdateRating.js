import React, {useState} from 'react';
import './UpdateRating.css';
import axios from 'axios';

function UpdateRating() {
  const [message, setMessage] = useState('');

  const handleUpdateRatings = () => {
    axios
      .put('http://localhost:3001/movies/steven_spielberg')
      .then((response) => setMessage(response.data))
      .catch((error) => console.error(error));
  };
  return (
    <div className='updateRatingMain'>
    <div className="updateRating">
    <h1>Movie Database</h1>
      <button className='button' onClick={handleUpdateRatings}>
        Update Steven Spielberg Ratings
      </button>
      <p>{message}</p>
    </div>
      <div className="updateRating2"></div>
    </div>
  );
}

export default UpdateRating;
