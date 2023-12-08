import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from 'src/firebase/auth';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [accountMenuAnchor, setAccountMenuAnchor] = useState(null);

  const onAccountMenuOpen = (event) => {
    setAccountMenuAnchor(event.currentTarget);
  };

  const closeAccountMenu = () => {
    setAccountMenuAnchor(null);
  };

  const onProfile = () => {
    navigate('profile');
    closeAccountMenu();
  };

  const onLogout = () => {
    closeAccountMenu();
    logout();
  };

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
        {!user && (
          <Link to="login" className="link nowrap">
            Log in
          </Link>
        )}

        {user && (
          <>
            <IconButton
              size="large"
              className="account-menu-toggler"
              onClick={onAccountMenuOpen}
              color="inherit"
            >
              <Avatar className="avatar" />
            </IconButton>

            <Menu
              anchorEl={accountMenuAnchor}
              open={Boolean(accountMenuAnchor)}
              onClose={closeAccountMenu}
              PaperProps={{ className: 'account-menu' }}
            >
              <MenuItem onClick={onProfile}>
                <ListItemIcon>
                  <AccountCircleIcon fontSize="small" />
                </ListItemIcon>
                Profile
              </MenuItem>

              <Divider />

              <MenuItem onClick={onLogout}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </>
        )}
      </div>
    </div>
  );
}
