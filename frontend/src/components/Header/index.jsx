import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import useAuth from '../../hooks/auth/useAuth';

import styles from './Header.module.scss';

const StyledNavLink = (props) => {
  return (
    <NavLink
      {...props}
      className="cursor-pointer text-2xl mx-1 p-3 hover:opacity-60"
    >
      {props.children}
    </NavLink>
  );
};

const Header = () => {
  const { token } = useAuth();

  return (
    <header
      className={`h-24 px-4 shadow-black shadow-md z-10  flex justify-between items-center ${styles.header}`}
    >
      <div className="flex justify-between items-center">
        <img className="w-16" src="logo.png" alt="Logo" />
        <h1 className="ml-4 text-4xl font-bold">MyApp Name</h1>
      </div>

      <nav>
        <ul>
          <StyledNavLink to="/">Home</StyledNavLink>
          {token ? (
            <StyledNavLink to="/lessons">Lessons</StyledNavLink>
          ) : (
            <>
              <StyledNavLink to="/login">Login</StyledNavLink>
              <StyledNavLink to="/signup">Sign Up</StyledNavLink>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

StyledNavLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Header;
