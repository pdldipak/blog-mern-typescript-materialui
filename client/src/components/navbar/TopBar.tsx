import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Stack from '@material-ui/core/Stack';
import Avatar from '@material-ui/core/Avatar';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { NavBar, TopNav } from './styled';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { ColorModeContext } from '../../utility/DarkTheme';
import DrawerComponent from '../drawer/DrawerComponent';
import { Box } from '@material-ui/core';
import SocialMediaIcons from '../icons/SocialMediaIcons';
import SearchAppBar from '../search/Search';
import LockIcon from '@material-ui/icons/Lock';

const TopBar: React.FC = () => {
  const auth = true;
  const colorMode = React.useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //Breakpoints
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      <TopNav variant="dense">
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
        <SearchAppBar />

        <IconButton>
          <Badge>
            <NavLink to="/login">
              <LockIcon />
            </NavLink>
          </Badge>
        </IconButton>
      </TopNav>
      <NavBar position="static" elevation={0}>
        {isMatch ? (
          <DrawerComponent />
        ) : (
          <Toolbar
            component="nav"
            sx={{ justifyContent: 'space-around', overflowX: 'auto', p: 2 }}
          >
            <>
              <Stack>
                <SocialMediaIcons />
              </Stack>

              <Typography variant="h6" component="div">
                <NavLink to="/">HOME</NavLink>
              </Typography>
              <Typography variant="h6" component="div">
                <NavLink to="/posts">POST</NavLink>
              </Typography>
              <Typography variant="h6" component="div">
                <NavLink to="/write">WRITE</NavLink>
              </Typography>
              <Typography variant="h6" component="div">
                <Link
                  href="https://dipakportfolio.vercel.app/"
                  target="_blank"
                  color="inherit"
                  underline="none"
                >
                  PORTFOLIO
                </Link>
              </Typography>

              {auth && (
                <Stack>
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
                </Stack>
              )}
            </>
          </Toolbar>
        )}
      </NavBar>
    </Box>
  );
};

export default TopBar;
