import React from 'react';
import { Grid, Box } from '@material-ui/core';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <Posts />
          </Grid>
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
