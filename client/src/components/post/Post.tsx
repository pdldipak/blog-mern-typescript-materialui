import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import { postTypes } from '../../types/type';
import { Image } from '../../utility/utilityStyled';

type Props = {
  post: postTypes;
};

const Post: React.FC<Props> = ({ post }) => {
  const PublicFolder = 'http://localhost:3001/images/';
  return (
    <Paper sx={{ marginTop: '62px', borderRadius: '5px', marginRight: '20px' }}>
      <Box height={{ xs: '400px', md: '600px' }}>
        <Image className="postImg" src={PublicFolder + post.photo} alt="" />
      </Box>
      <Grid container p={2}>
        <Grid item>
          <Box sx={{ display: 'flex', marginBottom: '16px' }}>
            {post.categories.map(category => (
              <Link key={category} to={`post/${post._id}`}>
                <Typography variant="subtitle2" component="div" mr={2}>
                  {category}
                </Typography>
              </Link>
            ))}
          </Box>
          <Box>
            <Link to={`post/${post._id}`}>
              <Typography variant="h4" gutterBottom>
                {post.title}
              </Typography>
            </Link>

            <Typography variant="subtitle2" color="text.secondary">
              {new Date(post.createdAt).toDateString()}
            </Typography>
            <Paragraph>{post.desc}</Paragraph>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Post;

const ParagraphText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.primary,
  marginTop: '16px',
}));

const Paragraph = styled(ParagraphText)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;
