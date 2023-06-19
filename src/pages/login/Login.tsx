import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import AuthService from '../../services/auth/AuthService';
import './login.css';

function LoginFooter() {
  return (
    <footer className="login-footer">
      <div className="footer-logo">
        <img
          className="logo"
          src="src/assets/images/gosaas-logo.png"
          alt="src/assets/images/gosaas-logo.png"
        />
      </div>
      <div className="copyright" id="copyright">
        Copyright(C) 2017, 2022, GoSaaS and/or its affiliates.
      </div>
    </footer>
  );
}

function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSignIn = async () => {
    const response = await AuthService.loginUser(username, password);
    console.log(response);
  };

  return (
    <div className="login-container">
      <div className="signin-container">
        <div className="head1">Sign In</div>
        <div className="head2">Environment Government & Compliance</div>
      </div>
      <div className="input-fields-container">
        <div className="buttons-container">
          <Button
            color="primary"
            variant="contained"
            size="large"
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              fontSize: 'medium',
            }}
          >
            Company Single Sign On
          </Button>
          <div className="or-line-container">
            <hr className="hr1" />
            <span>or</span>
            <hr className="hr2" />
          </div>
          <TextField
            color="primary"
            variant="outlined"
            label="Username"
            type="text"
            spellCheck={false}
            required
            value={username}
            sx={{ marginTop: '2rem' }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormControl variant="outlined" sx={{ marginTop: '2rem' }}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              color="primary"
              spellCheck={false}
              required
              value={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button
            color="secondary"
            variant="contained"
            className="sign-in-button"
            size="large"
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              fontSize: 'medium',
              marginTop: '2rem',
            }}
            onClick={handleSignIn}
          >
            Sign In
          </Button>
        </div>
      </div>
      <LoginFooter />
    </div>
  );
}

export default Login;
