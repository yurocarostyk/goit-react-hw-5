// src/components/MovieList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies, getFullImageUrl }) => (
  <ul>
    {movies.map(movie => (
      <li key={movie.id}>
        <Link to={`/movies/${movie.id}`}>
          {movie.poster_path && (
            <img
              src={getFullImageUrl(movie.poster_path)}
              alt={movie.title}
              width="100"
            />
          )}
          <p>{movie.title}</p>
        </Link>
      </li>
    ))}
  </ul>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
  getFullImageUrl: PropTypes.func.isRequired,
};

export default MovieList;