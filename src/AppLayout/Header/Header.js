import { Link } from 'react-router-dom';
import AppMenu from './AppMenu/AppMenu';
import SessionWidget from './SessionWidget/SessionWidget';
import './Header.css';

export default function Header() {
  return (
    <div className="Header">
      <div className="app-menu-toggler">
        <AppMenu />
      </div>

      <div className="title">
        <h1>data.io</h1>
      </div>

      <div className="nav">
        <Link to="home" className="link">
          Home
        </Link>
      </div>

      <div className="session">
        <SessionWidget />
      </div>
    </div>
  );
}
