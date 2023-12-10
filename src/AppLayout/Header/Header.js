import { Link } from 'react-router-dom';
import NavigationDrawerButton from 'src/navigation/NavigationDrawerButton/NavigationDrawerButton';
import SessionWidget from './SessionWidget/SessionWidget';
import './Header.css';

export default function Header() {
  return (
    <div className="Header">
      <div className="navigation-drawer-button">
        <NavigationDrawerButton />
      </div>

      <div className="title">
        <h1>data.io</h1>
      </div>

      <div className="navigation-bar">
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
