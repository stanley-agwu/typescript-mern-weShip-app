import axios from 'axios';
import { ENDPOINTS } from '../../constants';
import { IRegisterUser, ILoginUser } from '../../types.ts';

// register user
const register = async (userData: IRegisterUser) => {
  const response = await axios.post(`${ENDPOINTS.register}`, userData, {
    headers: { 
      'Content-Type': 'application/json',
    },
   });
   const results = response.data;

  if (results) {
    const userData = {
      id: results.user._id,
      token: results.user.token
    };
    localStorage.setItem('user', JSON.stringify(userData));
  }

  return results;
}

// login user
const login = async (userData: ILoginUser) => {
  const response = await axios.post(`${ENDPOINTS.login}`, userData, {
    headers: { 
      'Content-Type': 'application/json',
    },
   });
   const results = response.data;

  if (results) {
    const userData = {
      id: results.user._id,
      token: results.user.token
    };
    localStorage.setItem('user', JSON.stringify(userData));
  }

  return results;
}

// log out user
const logout = () => {
  localStorage.removeItem('user');
}

const authService = {
  register,
  logout,
  login,
}

export default authService;