import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export const NavBar = styled(AppBar)`
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(59, 204, 80, 1) 0%,
    rgba(0, 212, 255, 1) 99%
  );
`;

export const TopNav = styled(Toolbar)({
  borderBottom: 1,
  borderColor: 'divider',
  display: 'flex',
  justifyContent: 'space-between',
  padding: 0,
});
