import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/core/Alert';
import { UserContext } from '../../context/authContext/AuthContext';
import { nameValidator, passwordValidator } from '../../utility/AuthValidator';

// type Props = {
//   user: any;
//   loading?: boolean;
//   error?: boolean;
//   onLogin: (username: string, password: string) => Promise<void>;
// };

const SignIn: React.FC = () => {
  const [username, setUsername] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const { onLogin, isLoading, error } = useContext<any>(UserContext);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nameError = nameValidator(username.value);
    const passwordError = passwordValidator(password.value);

    if (nameError || passwordError) {
      setUsername({ ...username, error: nameError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    onLogin(username.value, password.value);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper
        elevation={0}
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '80vh',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            type="text"
            label="Username"
            name="username"
            autoComplete="username"
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
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={!!password.error}
            helperText={password.error}
            value={password.value}
            onChange={e => setPassword({ value: e.target.value, error: '' })}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
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
            disabled={isLoading}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <NavLink to="/register">
                <Typography variant="body2">
                  {"Don't have an account? Sign Up"}
                </Typography>
              </NavLink>
            </Grid>
          </Grid>
        </Box>
        {error && (
          <Alert variant="filled" severity="error">
            Please check username or password!
          </Alert>
        )}
      </Paper>
    </Container>
  );
};

export default SignIn;
