// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies, getFullImageUrl } from '../../api/tmdb';
import MovieList from '../../components/MovieList/MovieList';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const trendingMovies = await fetchTrendingMovies();
      setMovies(trendingMovies);
    };

    getTrendingMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} getFullImageUrl={getFullImageUrl} />
    </div>
  );
};

export default HomePage;
