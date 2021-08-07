import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Stack from '@material-ui/core/Stack';
import Avatar from '@material-ui/core/Avatar';
import { UserContext } from '../context/authContext/AuthContext';

const AuthService: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const { user, onLogout } = useContext<any>(UserContext);
 
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack>
      <IconButton
        size="small"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        {user && (
          <Avatar
            alt="Dipak Poudel"
            src={user.profilePic}
            sx={{ width: 30, height: 30 }}
          />
        )}
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
          <NavLink to="/login" onClick={() => onLogout()}>
            LOGOUT
          </NavLink>
        </MenuItem>
      </Menu>
    </Stack>
  );
};

export default AuthService;
