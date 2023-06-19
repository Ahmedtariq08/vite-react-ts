import { get, post, put, destroy } from '../api/ApiClient';
import RestUtil from '../../utils/RestUtils';

// ANCHOR - API ENDPOINTS
const Auth = {
  loginUser: (username: string, password: string) =>
    post('/auth/users/authenticate', { username, password }),
  logoutUser: () => post('auth//users/logout'),
};

class AuthService {
  public static loginUser = async (username: string, password: string) => {
    const response = await RestUtil.post(
      'http://localhost:8080/auth/users/authenticate',
      { username, password }
    );
    console.log(response);
    // const response = await Auth.loginUser(username, password);
    // console.log(response);
  };

  public static logoutUser = async () => {
    const response = await Auth.logoutUser();
  };
}

export default AuthService;
