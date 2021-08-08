import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FileUploadIcon from '@material-ui/icons/FileUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Image } from '../../utility/utilityStyled';
import { UserContext } from '../../context/authContext/AuthContext';
import {
  emailValidator,
  nameValidator,
  passwordValidator,
} from '../../utility/AuthValidator';

const Settings: React.FC = () => {
  const [username, setUsername] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [file, setFile] = useState<File>();
  const { user } = useContext<any>(UserContext);
  const PublicFolder = 'http://localhost:3001/images/';

  const handleImageChange = function (
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const fileList = event.target.files;

    if (!fileList) return;

    setFile(fileList[0]);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nameError = nameValidator(username.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setUsername({ ...username, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    const updatedUser: any = {
      userId: user._id,
      username: username.value,
      email: email.value,
      password: password.value,
    };

    if (file) {
      const data = new FormData();
      const filename = new Date().getTime().toString() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePic = filename;

      try {
        await axios.post('/blog/upload', data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axios.put('/blog/users/' + user._id, updatedUser);
      toast.success('updated sucessfully');
      res.data && window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <ToastContainer />
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          sx={{
            backgroundImage: `url(${PublicFolder + user.profilePic})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: theme =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <UpdateText gutterBottom>Update your account</UpdateText>
          <Box
            sx={{
              m: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h3" variant="h6">
              Profile Picture
            </Typography>

            <Box sx={{ height: '200px', width: '200px' }}>
              <Image
                src={
                  file
                    ? URL.createObjectURL(file)
                    : PublicFolder + user.profilePic
                }
                alt=""
                style={{ borderRadius: '50%' }}
              />
            </Box>

            <Label htmlFor="fileInput">
              <UploadIcon />
            </Label>
            <input
              id="fileInput"
              type="file"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="
              username"
                label="Username"
                name="username"
                autoFocus
                error={!!username.error}
                helperText={username.error}
                value={username.value}
                onChange={e =>
                  setUsername({ value: e.target.value, error: '' })
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                error={!!email.error}
                helperText={email.error}
                value={email.value}
                onChange={e => setEmail({ value: e.target.value, error: '' })}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password.value}
                error={!!password.error}
                helperText={password.error}
                onChange={e =>
                  setPassword({ value: e.target.value, error: '' })
                }
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ my: 3, py: 2 }}
              >
                Update
              </Button>
            </Box>

            <Button
              fullWidth
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              sx={{ my: 5, py: 2 }}
            >
              Delete Account
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Settings;

const Label = styled('label')`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 32px;
`;

const UploadIcon = styled(FileUploadIcon)`
  width: 50px;
  height: 50px;
  :hover {
    color: green;
  }
`;

const UpdateText = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.primary.main,
  fontSize: '32px',
  fontFamily: 'Lora',
  fontStyle: 'italic',
}));
