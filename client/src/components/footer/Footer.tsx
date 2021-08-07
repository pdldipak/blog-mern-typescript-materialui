import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const Footer: React.FC = () => {
  return (
    <Box
      mt={3}
      px={{ xs: 2, sm: 5 }}
      py={{ xs: 2, sm: 5 }}
      bgcolor="#26a69a"
      color="white"
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Help</Box>
            <Box>
              <Link href="#" color="inherit">
                Contact
              </Link>
            </Box>
            <Box>
              <Link href="#" color="inherit">
                Support
              </Link>
            </Box>
            <Box>
              <Link href="#" color="inherit">
                Privacy
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Account</Box>
            <Box>
              <Link href="#" color="inherit">
                Login
              </Link>
            </Box>
            <Box>
              <Link href="#" color="inherit">
                Register
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>About</Box>
            <Box>
              <Link href="#" color="inherit">
                Benefit
              </Link>
            </Box>
            <Box>
              <Link href="#" color="inherit">
                History
              </Link>
            </Box>
            <Box>
              <Link href="#" color="inherit">
                Policy
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
          Dipak Blog &reg; {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
