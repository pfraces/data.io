import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <nav className="NavigationBar">
      <Link to="home" className="link">
        Home
      </Link>
    </nav>
  );
}
