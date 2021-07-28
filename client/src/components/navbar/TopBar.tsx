import * as React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Stack from '@material-ui/core/Stack';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { NavBar, TopNav } from './styled';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { ColorModeContext } from '../../utility/DarkTheme';
import DrawerComponent from '../drawer/DrawerComponent';
import { Box } from '@material-ui/core';
import SocialMediaIcons from '../icons/SocialMediaIcons';
import SearchAppBar from '../search/Search';

const TopBar: React.FC = () => {
  const colorMode = React.useContext(ColorModeContext);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

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
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={handleChange}
                aria-label="login switch"
              />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup>

        <SearchAppBar />
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
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
                Home
              </Typography>
              <Typography variant="h6" component="div">
                Profile
              </Typography>
              <Typography variant="h6" component="div">
                About
              </Typography>
              <Typography variant="h6" component="div">
                Setting
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
                    <AccountCircle />
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
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
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
