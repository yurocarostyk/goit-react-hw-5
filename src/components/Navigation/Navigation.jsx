import { NavLink } from 'react-router-dom';
import './Navigation.module.css'; 

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/movies" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
