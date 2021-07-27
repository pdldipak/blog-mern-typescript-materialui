import React from 'react';
import { Typography, Box, Stack, Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import image from '../../assets/images/header01.jpeg';

const Item = styled(Typography)(({ theme }) => ({
  ...theme.typography.h2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  position: 'absolute',
  fontSize: '100px',
  opacity: '1',
}));

const BlogTitleStack = styled(Stack)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled(Stack)``;

const Image = styled('img')`
  width: 100%;
  height: 450px;
  object-fit: cover;
`;

const Header: React.FC = () => {
  return (
    <Box>
      <BlogTitleStack>
        <Item>Blog</Item>
      </BlogTitleStack>

      <ImageContainer>
        <Image src={image} alt="headerImage" />
      </ImageContainer>
    </Box>
  );
};

export default Header;
