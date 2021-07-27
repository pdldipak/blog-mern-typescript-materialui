import React from 'react';
import { Drawer, List, ListItem, ListItemText, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SocialMediaIcons from '../icons/SocialMediaIcons';

type Props = {
  anchor?: 'top' | 'right' | 'bottom' | 'left';
};

const DrawerComponent: React.FC<Props> = () => {
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
            width: '250px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ListItem divider button>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem divider button>
            <ListItemText>Profile</ListItemText>
          </ListItem>
          <ListItem divider button>
            <ListItemText>About</ListItemText>
          </ListItem>
          <ListItem divider button>
            <ListItemText>Setting</ListItemText>
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
