import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export const NavBar = styled(AppBar)`
  background: #009688;
`;

export const TopNav = styled(Toolbar)({
  borderBottom: 1,
  borderColor: 'divider',
  display: 'flex',
  justifyContent: 'space-between',
  padding: 0,
});
