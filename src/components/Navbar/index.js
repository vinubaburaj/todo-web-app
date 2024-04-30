import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CategoryIcon from '@mui/icons-material/Category';
import { toggleNavbar } from './navbarReducer';

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
        anchor="left"
        open={navbarOpen}
        onClose={handleDrawerToggle}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="close drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ml: 'auto' }}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <List>
          <ListItem  onClick={handleDrawerToggle}>
            <ListItemIcon><RestaurantMenuIcon /></ListItemIcon>
            <ListItemText primary="Menu" />
          </ListItem>
          <ListItem  onClick={handleDrawerToggle}>
            <ListItemIcon><FastfoodIcon /></ListItemIcon>
            <ListItemText primary="Food" />
          </ListItem>
          <ListItem  onClick={handleDrawerToggle}>
            <ListItemIcon><CategoryIcon /></ListItemIcon>
            <ListItemText primary="Categories" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default SideNavbar;
