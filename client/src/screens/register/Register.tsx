import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/core/Alert';
import { UserContext } from '../../context/authContext/AuthContext';
import {
  emailValidator,
  nameValidator,
  passwordValidator,
} from '../../utility/AuthValidator';

const Register: React.FC = () => {
  const [username, setUsername] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const { onRegister, error } = useContext<any>(UserContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
    onRegister(username.value, email.value, password.value);
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOpenIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            type="text"
            name="username"
            autoFocus
            error={!!username.error}
            helperText={username.error}
            value={username.value}
            onChange={e => setUsername({ value: e.target.value, error: '' })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
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
            onChange={e => setPassword({ value: e.target.value, error: '' })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              bgcolor: '#00acc1',
              my: 3,
              py: 2,
            }}
          >
            Register
          </Button>
        </Box>
        {error && (
          <Alert variant="filled" severity="error">
            Something went wrong — check it out!
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default Register;
