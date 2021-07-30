import { styled } from '@material-ui/core/styles';
import { Paper, Container } from '@material-ui/core';

export const Header = styled(Paper)`
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const MainContainer = styled(Container)`
  max-width: 1550px;
  min-height: 100vh;
`;
