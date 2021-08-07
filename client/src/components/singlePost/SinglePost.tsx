import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Box,
  Paper,
  Grid,
  Typography,
  Stack,
  IconButton,
  Badge,
  TextField,
  Button,
} from '@material-ui/core';

import SaveIcon from '@material-ui/icons/Save';
import { red } from '@material-ui/core/colors';
import { styled } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Image } from '../../utility/utilityStyled';
import { postTypes } from '../../types/type';
import { BlogsContext } from '../../context/blogsContext/BlogContext';
import { UserContext } from '../../context/authContext/AuthContext';

type Props = {
  posts: postTypes[];
};

const SinglePost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);
  const { posts } = useContext<Props>(BlogsContext);
  const { user } = useContext<any>(UserContext);
  const { postId } = useParams<any>();
  const PublicFolder = 'http://localhost:3001/images/';

  useEffect(() => {
    posts
      ?.filter(post => post._id === postId)
      .map(post => {
        setTitle(post.title);
        setDesc(post.desc);
      });
  }, [posts, postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/blog/posts/${postId}`, {
        data: { username: user.username },
      });
      window.location.replace('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.put(`/blog/posts/${postId}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Paper sx={{ marginTop: '62px', borderRadius: '5px', marginRight: '20px' }}>
      {posts
        ?.filter(post => post._id === postId)
        .map(post => {
          return (
            <Box key={post._id}>
              <Box sx={{ height: '500px' }}>
                <Image src={PublicFolder + post.photo} alt="" />
              </Box>
              {post.username === user?.username && (
                <Box
                  sx={{
                    color: 'action.active',
                    justifyContent: 'flex-end',
                    padding: '8px',
                  }}
                >
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
                    <Box>
                      <IconButton>
                        <Badge>
                          <EditIcon
                            color="success"
                            onClick={() => setUpdateMode(true)}
                          />
                        </Badge>
                      </IconButton>
                      <IconButton>
                        <Badge>
                          <DeleteIcon
                            sx={{ color: red[500] }}
                            onClick={() => handleDelete()}
                          />
                        </Badge>
                      </IconButton>
                    </Box>
                  </Stack>
                </Box>
              )}
              {updateMode ? (
                <Form onSubmit={handleUpdate}>
                  <Box mb={4}>
                    <TextInput
                      type="text"
                      label="Blog Title"
                      color="primary"
                      fullWidth
                      required
                      variant="standard"
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                    />
                  </Box>
                  <Box mb={4}>
                    <TextInput
                      type="text"
                      label="Details"
                      variant="outlined"
                      color="primary"
                      rows={6}
                      multiline
                      fullWidth
                      required
                      value={desc}
                      onChange={e => setDesc(e.target.value)}
                    />
                  </Box>
                  <Button
                    size="medium"
                    type="submit"
                    color="success"
                    variant="contained"
                    endIcon={<SaveIcon />}
                    sx={{ width: '200px', alignSelf: 'center' }}
                  >
                    Update
                  </Button>
                </Form>
              ) : (
                <Grid container direction="column" p={2}>
                  <Grid item xs={12}>
                    <Typography variant="h4" mr={12} gutterBottom>
                      {post.title}
                    </Typography>
                  </Grid>
                  <Grid item mb={4} xs={12}>
                    <ParagraphText>{post.desc}</ParagraphText>
                  </Grid>
                </Grid>
              )}
            </Box>
          );
        })}
    </Paper>
  );
};

export default React.memo(SinglePost);

const ParagraphText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.primary,
  marginTop: '16px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

const TextInput = styled(TextField)`
  border: none;
  margin-top: 24px;
  background-color: #c5c2c554;
  &::placeholder {
    font-weight: 400;
  }

  &:focus {
    outline-style: none;
  }
`;
