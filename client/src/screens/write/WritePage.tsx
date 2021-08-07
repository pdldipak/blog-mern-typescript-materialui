import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Stack, Box, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { styled } from '@material-ui/core/styles';
import { Image } from '../../utility/utilityStyled';
import { UserContext } from '../../context/authContext/AuthContext';

const WritePage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState<File>();

  const { user } = useContext<any>(UserContext);

  const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;

    if (!fileList) return;

    setFile(fileList[0]);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newPost: any = { username: user.username, title, desc };

    if (file) {
      const data = new FormData();
      const filename = new Date().getTime().toString() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;

      try {
        await axios.post('/blog/upload', data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axios.post('/blog/posts', newPost);
      res.data && window.location.replace('/post/' + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WriteStack sx={{ marginTop: '32px' }}>
      {file && (
        <Stack height={{ xs: '400px', md: '600px' }}>
          <Image src={URL.createObjectURL(file)} alt="" />
        </Stack>
      )}

      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Box mb={4}>
          <Label htmlFor="fileInput">
            <AddIcon />
          </Label>
          <input
            id="fileInput"
            type="file"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />

          <TextInput
            label="Blog Title"
            color="primary"
            fullWidth
            required
            id="standard-basic"
            variant="standard"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Box>
        <Box mb={4}>
          <TextInput
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
          sx={{
            bgcolor: '#00acc1',
            my: 3,
            py: 2,
            alignSelf: 'center',
            width: '220px',
          }}
        >
          Publish
        </Button>
      </Form>
    </WriteStack>
  );
};

export default WritePage;

const WriteStack = styled(Grid)`
  min-height: 100vh;
  max-width: 900px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Form = styled('form')`
  display: flex;
  flex-direction: column;
`;

const Label = styled('label')`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 24px;
`;

const AddIcon = styled(AddCircleOutlineIcon)`
  width: 50px;
  height: 50px;
  :hover {
    color: green;
  }
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
