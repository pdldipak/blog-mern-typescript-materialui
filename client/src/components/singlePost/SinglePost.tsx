import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {
  Box,
  Paper,
  Grid,
  Typography,
  Stack,
  IconButton,
  Badge,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { styled } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Image } from '../../utility/utilityStyled';
import { postTypes } from '../../types/type';
import { BlogsContext } from '../../context/blogsContext/BlogContext';

type Props = {
  posts: postTypes[];
};

const SinglePost: React.FC = () => {
  const { posts } = useContext<Props>(BlogsContext);
  const { postId } = useParams<any>();
  const PublicFolder = 'http://localhost:3001/images/';
  return (
    <Paper sx={{ marginTop: '62px', borderRadius: '5px', marginRight: '20px' }}>
      {posts
        ?.filter(post => post._id === postId)
        .map(post => {
          console.log('Post', post);
          return (
            <div key={post._id}>
              {' '}
              <Box sx={{ height: '500px' }}>
                <Image src={PublicFolder + post.photo} alt="" />
              </Box>
              <Grid container p={2}>
                <Grid item>
                  <Stack direction="row">
                    <Typography variant="h4" mr={8} gutterBottom>
                      {post.title}
                    </Typography>
                    <Box sx={{ color: 'action.active' }}>
                      <IconButton>
                        <Badge>
                          <EditIcon color="success" />
                        </Badge>
                      </IconButton>
                      <IconButton>
                        <Badge>
                          <DeleteIcon sx={{ color: red[500] }} />
                        </Badge>
                      </IconButton>
                    </Box>
                  </Stack>
                </Grid>
                <Grid item mb={4}>
                  <Stack
                    sx={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography variant="subtitle1" color="text.secondary">
                      Author:
                      <Link to={`/?user=${post.username}`}>
                        {post.username}
                      </Link>
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      gutterBottom
                    >
                      {new Date(post.createdAt).toDateString()}
                    </Typography>
                  </Stack>

                  <ParagraphText>{post.desc}</ParagraphText>
                </Grid>
              </Grid>
            </div>
          );
        })}
    </Paper>
  );
};

export default SinglePost;

const ParagraphText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.primary,
  marginTop: '16px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));
