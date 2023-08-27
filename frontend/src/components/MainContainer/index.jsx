import PropTypes from 'prop-types';

import Header from '../Header';

import styles from './MainContainer.module.scss';

function MainContainer({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

MainContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainContainer;
