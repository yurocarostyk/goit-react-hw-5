import React, { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, useNavigate, Outlet, NavLink } from 'react-router-dom';
import { fetchMovieDetails } from '../../api/tmdb'; 
import './MovieDetailsPage.module.css'; 

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const backLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <div className="container">
      <button className="button" onClick={() => navigate(backLocationRef.current)}>Go back</button>
      {movie && (
        <div className="movie-details">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
      )}
      <nav className="nav">
        <ul>
          <li>
            <NavLink 
              to="cast"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="reviews"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
