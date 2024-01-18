import {auth} from './index';

// users
function loginUser(data) {
  return auth.post('/login', data);
}

function signupUser(data) {
  return auth.post('/signup', data);
}

function logoutUser() {
  return auth.post('/logout');
}

export { loginUser, signupUser, logoutUser };