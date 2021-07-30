import React from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SocialMediaIcons from '../icons/SocialMediaIcons';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Stack from '@material-ui/core/Stack';
import Avatar from '@material-ui/core/Avatar';
type Props = {
  anchor?: 'top' | 'right' | 'bottom' | 'left';
};

const DrawerComponent: React.FC<Props> = () => {
  const auth = true;
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box p={2}>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List
          sx={{
            width: '250px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ListItem divider button>
            <ListItemText>
              {' '}
              <NavLink to="/">HOME</NavLink>
            </ListItemText>
          </ListItem>
          <ListItem divider button>
            <ListItemText>
              <NavLink to="/posts">POST</NavLink>
            </ListItemText>
          </ListItem>
          <ListItem divider button>
            <ListItemText>
              {' '}
              <NavLink to="/write">WRITE</NavLink>
            </ListItemText>
          </ListItem>
          <ListItem divider button>
            <ListItemText>
              {auth && (
                <Box>
                  <IconButton
                    size="small"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <Avatar
                      alt="Dipak Poudel"
                      src="/resume_pic.jpg"
                      sx={{ width: 30, height: 30 }}
                    />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      {' '}
                      <NavLink to="/settings">SETTINGS</NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      {' '}
                      <NavLink to="/write">WRITE</NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      {' '}
                      <NavLink to="/write">LOGOUT</NavLink>
                    </MenuItem>
                  </Menu>
                </Box>
              )}
            </ListItemText>
          </ListItem>
          <ListItem divider button>
            <SocialMediaIcons />
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default DrawerComponent;
