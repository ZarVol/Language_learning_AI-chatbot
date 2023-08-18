import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.business}>
        <img className={styles.logo} src="logo.png" alt="Logo" />
        <h1 className={styles.heading}>MyApp Name</h1>
      </div>

      <nav className={styles.navbar_wrapper}>
        <ul className={styles.navbar}>
          <NavLink className={styles.link} to="/">
            Home
          </NavLink>
          <NavLink className={styles.link} to="/lessons">
            Lessons
          </NavLink>
          <NavLink className={styles.link} to="/about">
            About
          </NavLink>
          <NavLink className={styles.link} to="/contact">
            Contact
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
