import { Outlet } from 'react-router-dom';
import NavigationDrawer from 'src/navigation/NavigationDrawer/NavigationDrawer';
import { SnackbarContainer } from './snackbar/snackbar';
import Header from './Header/Header';
import './AppLayout.css';

export default function AppLayout() {
  return (
    <div className="AppLayout">
      <Header />
      <Outlet />
      <SnackbarContainer />
      <NavigationDrawer />
    </div>
  );
}
