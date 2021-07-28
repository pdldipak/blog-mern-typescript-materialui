import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import image from '../../assets/images/header01.jpeg';

const Header: React.FC = () => {
  return (
    <BlogTitleStack>
      <TextBox>
        <Text>Dipak</Text>
        <Text>Blog</Text>
      </TextBox>
    </BlogTitleStack>
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

const BlogTitleStack = styled(Paper)({
  mb: 4,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage: `url(${image})`,
  width: '100%',
  height: '450px',
});

const TextBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
});
