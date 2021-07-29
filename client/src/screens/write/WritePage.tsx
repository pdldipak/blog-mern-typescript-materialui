import React from 'react';
import { Stack, Box, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { styled } from '@material-ui/core/styles';
import { Image } from '../../utility/utilityStyled';

const WritePage: React.FC = () => {
  return (
    <WriteStack sx={{ marginTop: '32px' }}>
      <Stack sx={{ height: '500px', margin: '0, auto' }}>
        <Image src="https://source.unsplash.com/random" alt="" />
      </Stack>
      <Form noValidate autoComplete="off">
        <Box mb={4}>
          <Label htmlFor="fileInput">
            <AddIcon />
          </Label>
          <input id="fileInput" type="file" style={{ display: 'none' }} />

          <TextInput
            label="Note Title"
            color="primary"
            fullWidth
            required
            id="standard-basic"
            variant="standard"
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
          />
        </Box>
        <Button
          size="medium"
          type="submit"
          color="success"
          variant="contained"
          endIcon={<SaveIcon />}
          sx={{ padding: '24px' }}
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
