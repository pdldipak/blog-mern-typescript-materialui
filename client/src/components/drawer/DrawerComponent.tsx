import React from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SocialMediaIcons from '../icons/SocialMediaIcons';
import AuthService from '../../utility/AuthService';

type Props = {
  anchor?: 'top' | 'right' | 'bottom' | 'left';
};

const DrawerComponent: React.FC<Props> = () => {
  const auth = true;
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(true);
  return (
    <Box p={2}>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List
          sx={{
            maxWidth: '250px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
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
            <ListItemText>{auth && <AuthService />}</ListItemText>
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
