
import React, { useState, useEffect } from 'react';
import { useParams, Link, Route, Routes, useLocation } from 'react-router-dom';
import { fetchMovieDetails, getFullImageUrl } from '../../api/tmdb';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieDetails = await fetchMovieDetails(movieId);
      setMovie(movieDetails);
    };

    getMovieDetails();
  }, [movieId]);

  if (!movie) return null;

  return (
    <div className={styles.container}>
      <Link to={location?.state?.from ?? "/movies"}>Go back</Link>
      <h1>{movie.title}</h1>
      <img src={getFullImageUrl(movie.poster_path)} alt={movie.title} />
      <p>{movie.overview}</p>
      <Routes>
        <Route path="cast" element={<MovieCast movieId={movieId} />} />
        <Route path="reviews" element={<MovieReviews movieId={movieId} />} />
      </Routes>
      <Link to={`cast`}>Cast</Link>
      <Link to={`reviews`}>Reviews</Link>
    </div>
  );
};

export default MovieDetailsPage;
