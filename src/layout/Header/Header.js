import NavigationDrawerButton from 'src/navigation/NavigationDrawerButton/NavigationDrawerButton';
import SessionWidget from './SessionWidget/SessionWidget';
import NavigationBar from 'src/navigation/NavigationBar/NavigationBar';
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
        <NavigationBar />
      </div>

      <div className="widgets">
        <SessionWidget />
      </div>
    </div>
  );
}
