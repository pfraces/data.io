import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="Header">
      <div className="title">
        <h1>data.io</h1>
      </div>

      <div className="nav">
        <Link to="home" className="link">
          Home
        </Link>
      </div>

      <div className="session">
        <Link to="login" className="link nowrap">
          Log in
        </Link>
      </div>
    </div>
  );
}
