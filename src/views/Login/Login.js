import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'src/firebase/auth';
import { useSnackbar } from 'src/AppLayout/snackbar/snackbar';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const snackbar = useSnackbar();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onEmailChange = (event) => {
    setUser((user) => ({ ...user, email: event.target.value }));
  };

  const onPasswordChange = (event) => {
    setUser((user) => ({ ...user, password: event.target.value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    login(user)
      .then(() => {
        navigate('/home');
      })
      .catch((err) => {
        snackbar({ severity: 'error', message: err.message });
      });
  };

  return (
    <div className="Login">
      <article className="page-container">
        <div className="card">
          <div className="card-header">
            <h1>Log in</h1>
          </div>

          <form noValidate className="form" onSubmit={onSubmit}>
            <div className="field">
              <p className="label">Email</p>

              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email"
                value={user.email}
                onChange={onEmailChange}
              />
            </div>

            <div className="password field">
              <div className="label">
                <p>Password</p>

                <Link to="/reset-password" className="forgot-password">
                  Forgot password?
                </Link>
              </div>

              <input
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="Password"
                value={user.password}
                onChange={onPasswordChange}
              />

              <div className="actions">
                <button type="submit" className="button large blue">
                  Log in
                </button>
              </div>
            </div>
          </form>

          <div className="footer">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Login;
