// src/pages/MoviesPage.jsx
import React, { useState } from 'react';
import { searchMovies, getFullImageUrl } from '../../api/tmdb';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchResults = await searchMovies(query);
    setMovies(searchResults);
  };

  return (
    <div className={styles.container}>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} getFullImageUrl={getFullImageUrl} />
    </div>
  );
};

export default MoviesPage;
