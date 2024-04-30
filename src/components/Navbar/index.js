import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Drawer, List, ListItem, ListItemText, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { toggleNavbar } from './navbarReducer';
import './index.css'

const SideNavbar = () => {
  const dispatch = useDispatch();
  const navbarOpen = useSelector(state => state.navbarReducer.navbarOpen);

  const handleDrawerToggle = () => {
    dispatch(toggleNavbar());
  };

  return (
      <>
        <Toolbar>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Drawer
            variant="persistent"
            color="danger"
            anchor="left"
            open={navbarOpen}
            onClose={handleDrawerToggle}
            sx={{
              width: 240,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: 240,
                boxSizing: 'border-box',
              },
            }}
        >
          <Toolbar />
          <List>
            <ListItem className="list-item">
              <ListItemText primary="Active" />
            </ListItem>
            <ListItem className="list-item">
              <ListItemText primary="Completed" />
            </ListItem>
            <ListItem className="list-item">
              <ListItemText primary="Account" />
            </ListItem>
            <ListItem className="list-item">
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Drawer>
      </>
  );
}

export default SideNavbar;
