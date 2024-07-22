// src/components/MovieCast.jsx
import React, { useEffect, useState } from 'react';
import { fetchMovieCast } from '../../api/tmdb';
import styles from './MovieCast.module.css';

const MovieCast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      const castData = await fetchMovieCast(movieId);
      setCast(castData);
    };

    getCast();
  }, [movieId]);

  return (
    <ul className={styles.castList}>
      {cast.map(actor => (
        <li key={actor.id} className={styles.castItem}>
          {actor.name} as {actor.character}
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
