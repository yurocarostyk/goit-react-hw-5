// src/components/MovieReviews.jsx
import React, { useEffect, useState } from 'react';
import { fetchMovieReviews } from '../../api/tmdb';
import styles from './MovieReviews.module.css';

const MovieReviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const reviewsData = await fetchMovieReviews(movieId);
      setReviews(reviewsData);
    };

    getReviews();
  }, [movieId]);

  return (
    <ul className={styles.reviewsList}>
      {reviews.map(review => (
        <li key={review.id} className={styles.reviewItem}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
