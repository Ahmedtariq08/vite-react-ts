import { Button } from '@mui/material';
import './login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="signin-container">
        <div className="head1">Sign In</div>
        <div className="head2">Environment Government & Compliance</div>
      </div>
      <div className="input-fields-container" />
      <div />
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
    </div>
  );
}

export default Login;
