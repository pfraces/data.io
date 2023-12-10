import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import './AppMenu.css';

export default function AppMenu() {
  const [appMenuOpen, setAppMenuOpen] = useState(false);

  const onAppMenuOpen = () => {
    setAppMenuOpen(true);
  };

  const closeAppMenu = () => {
    setAppMenuOpen(false);
  };

  return (
    <div className="AppMenu">
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        onClick={onAppMenuOpen}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={appMenuOpen}
        onClose={closeAppMenu}
        PaperProps={{ className: 'app-menu' }}
      >
        <div className="app-menu-header">
          <IconButton onClick={closeAppMenu}>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />

        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="home" onClick={closeAppMenu}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
