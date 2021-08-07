import React, { useContext } from 'react';
import { Typography, Box, Stack } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import image from '../../assets/images/header01.jpeg';
import { UserContext } from '../../context/authContext/AuthContext';

const Header: React.FC = () => {
  const { user } = useContext<any>(UserContext);
  return (
    <Box sx={{ height: '600px' }}>
      <BlogImage>
        {user ? <Text>{user.username}</Text> : <Text>Dipak</Text>}

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
