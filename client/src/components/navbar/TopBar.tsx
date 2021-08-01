import * as React from 'react';
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
import { Box } from '@material-ui/core';
import SocialMediaIcons from '../icons/SocialMediaIcons';
import SearchAppBar from '../search/Search';
import LockIcon from '@material-ui/icons/Lock';
import AuthService from '../../utility/AuthService';

const TopBar: React.FC = () => {
  const auth = true;
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

              {auth && <AuthService />}
            </>
          </Toolbar>
        )}
      </NavBar>
    </Box>
  );
};

export default TopBar;
