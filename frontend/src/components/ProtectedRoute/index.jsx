import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';

import useAuth from '../../hooks/auth/useAuth';

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    // The user is not logged in, redirect them to the login page
    return <Redirect to="/login" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProtectedRoute;
