import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Stack from '@material-ui/core/Stack';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { NavBar, TopNav } from './styled';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { ColorModeContext } from '../../utility/DarkTheme';
import DrawerComponent from '../drawer/DrawerComponent';
import { Box, Button } from '@material-ui/core';
import SocialMediaIcons from '../icons/SocialMediaIcons';
import SearchAppBar from '../search/Search';
import LoginIcon from '@material-ui/icons/Login';
import LogoutIcon from '@material-ui/icons/Logout';
import AuthService from '../../utility/AuthService';
import { UserContext } from '../../context/authContext/AuthContext';

const TopBar: React.FC = () => {
  const { user, onLogout } = useContext<any>(UserContext);
  const auth = user;
  const colorMode = React.useContext(ColorModeContext);

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
            {!user ? (
              <NavLink to="/login">
                <Button
                  sx={{
                    bgcolor: '#00acc1',
                  }}
                  variant="contained"
                  endIcon={<LoginIcon />}
                >
                  LogIn
                </Button>
              </NavLink>
            ) : (
              <Button
                sx={{
                  bgcolor: '#7b1fa2',
                }}
                variant="contained"
                endIcon={<LogoutIcon />}
                onClick={() => onLogout()}
              >
                LogOut
              </Button>
            )}
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
                <NavLink to="/posts" activeClassName="active-link">
                  HOME
                </NavLink>
              </Typography>
              <Typography variant="h6" component="div">
                <NavLink to="/post/:postId" activeClassName="active-link">
                  POST
                </NavLink>
              </Typography>
              <Typography variant="h6" component="div">
                <NavLink to="/write" activeClassName="active-link">
                  WRITE
                </NavLink>
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

              {auth && <AuthService />}
            </>
          </Toolbar>
        )}
      </NavBar>
    </Box>
  );
};

export default TopBar;
