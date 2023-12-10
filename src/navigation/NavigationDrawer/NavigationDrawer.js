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
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigationDrawer } from '../navigation';
import './NavigationDrawer.css';

export default function NavigationDrawer() {
  const { navigationDrawerOpen, closeNavigationDrawer } = useNavigationDrawer();

  return (
    <Drawer
      anchor="left"
      open={navigationDrawerOpen}
      onClose={closeNavigationDrawer}
      PaperProps={{ className: 'navigation-drawer' }}
    >
      <div className="header">
        <IconButton onClick={closeNavigationDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="home"
            onClick={closeNavigationDrawer}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
