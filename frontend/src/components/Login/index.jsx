import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/auth/useAuth';

import styles from './Login.module.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { token, login } = useAuth();

  useEffect(() => {
    setError('');
  }, []);

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // const { token } = useAuth();

    if (!token) {
      // The user is not logged in, so we need to check their credentials
      const isEmailValid = email.includes('@');
      const isPasswordValid = password.length >= 8;
      if (!isEmailValid) {
        setError('Please enter a valid email address.');
        return;
      }
      if (!isPasswordValid) {
        setError('Please enter a password with at least 8 characters.');
        return;
      }

      try {
        await login(email, password);
        setError('');
        setLoading(false);

        navigate('/');
      } catch (error) {
        setError('Invalid credentials. Please try again.');
        setLoading(false);
      }
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <form onSubmit={handleLogin} className={styles.form}>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleInputEmail}
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleInputPassword}
            required
          />
          <button className={styles.button} type="submit" disabled={loading}>
            Login
          </button>
          {error && <p className={styles.errorMessage}>{error}</p>}
          {loading && (
            <div className={styles.loading}>
              <p>Loading...</p>
            </div>
          )}
          <p className={styles.signupText}>
            Don&apos;t have an account?{' '}
            <Link className={styles.signupLink} to="/signup">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
