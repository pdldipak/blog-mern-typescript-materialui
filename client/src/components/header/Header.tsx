import * as React from 'react';
import { Typography, Box, Stack } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import image from '../../assets/images/header01.jpeg';

const Header: React.FC = () => {
  return (
    <Box sx={{ height: '600px' }}>
      <BlogImage>
        <Text>Dipak</Text>
        <Text>Blog</Text>
      </BlogImage>
    </Box>
  );
};

export default Header;

const Text = styled(Typography)(({ theme }) => ({
  ...theme.typography.h2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.primary.main,
  fontSize: '100px',
  fontFamily: 'Lora',
  fontStyle: 'italic',
}));

const BlogImage = styled(Stack)({
  mb: 4,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage: `url(${image})`,
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
