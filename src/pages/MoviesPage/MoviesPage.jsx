import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies, getFullImageUrl } from '../../api/tmdb';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const queryParam = searchParams.get('query');
    if (queryParam) {
      const fetchMovies = async () => {
        const searchResults = await searchMovies(queryParam);
        setMovies(searchResults);
      };
      fetchMovies();
    }
  }, [searchParams]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchParams({ query });
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
