import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
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
          />
          <TextField
            color="primary"
            variant="outlined"
            label="Password"
            type="password"
            spellCheck={false}
            required
          />
          <Button
            color="secondary"
            variant="contained"
            className="sign-in-button"
            size="large"
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              fontSize: 'medium',
            }}
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
