import React from 'react';
import './App.css';
import MovieSearch from './Components/MovieSearch/MovieSearch';
import MovieList from './Components/MultipleActorsInMovie/MovieList';
import Actors2000And2015 from './Components/Actors2000And2015/Actors2000And2015';
import MovieRatings from './Components/MovieRatings/MovieRatings';
import UpdateRating from './Components/UpdateRatings/UpdateRating';
import CopyRight from './Components/CopyRight/CopyRight';

const App = () => {
  return (
    <div className="App">
      <>
        <CopyRight/>
        <MovieSearch />
        <MovieList />
        <Actors2000And2015 />
        <MovieRatings />
        <UpdateRating />
      </>
    </div>
  );
};
export default App;
