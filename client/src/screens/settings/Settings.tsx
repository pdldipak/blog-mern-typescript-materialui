import * as React from 'react';
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

const Settings: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: theme =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[50]
              : theme.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
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
              src="https://source.unsplash.com/random"
              alt=""
              style={{ borderRadius: '50%' }}
            />
          </Box>
          <Label htmlFor="fileInput">
            <UploadIcon />
          </Label>
          <input id="fileInput" type="file" style={{ display: 'none' }} />

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="
              username"
              label="Username"
              name="username"
              autoComplete="email"
              autoFocus
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
