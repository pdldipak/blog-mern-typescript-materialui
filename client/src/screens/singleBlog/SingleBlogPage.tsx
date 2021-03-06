import React from 'react';
import { Grid, Box } from '@material-ui/core';
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';

const SingleBlogPage: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <SinglePost />
          </Grid>
          <Grid item xs={12} md={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default React.memo(SingleBlogPage);
