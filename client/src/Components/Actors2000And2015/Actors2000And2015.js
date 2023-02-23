import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Actors2000and2015.css'
const BASE_URL = 'http://localhost:3001';

const Actors2000And2015 = () => {
  const [actorsByYear, setActorsByYear] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch actors who acted in a movie before 2000 and also in a movie after 2015
    axios
      .get(`${BASE_URL}/actors/2000-2015`)
      .then((response) => setActorsByYear(response.data))
      .catch((error) => setError(error.response.data));
  }, []);

  return (
    <div className="Actors">
      <div className="actors2000And2015">
        <h1>Actors Who Acted in a Movie Before 2000 and After 2015</h1>
        {actorsByYear.length > 0 ? (
          <ul>
            {actorsByYear.map((actor) => (
              <li key={actor.Act_id}>{actor.Act_Name}</li>
            ))}
          </ul>
        ) : (
          <p>No actors found.</p>
        )}
      </div>
      <div className="actors2"></div>
    </div>
  );
};

export default Actors2000And2015;
