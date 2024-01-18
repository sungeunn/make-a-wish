import axios from 'axios';
import {setInterceptors} from '@/api/config/interceptors';

// instance & interceptor
function create(url, options) {
  return axios.create(Object.assign({baseURL: url}, options));
}

function createWithAuth(url, options) {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  setInterceptors(instance);
  return instance;
}

export const auth = create('/auth');
export const posts = createWithAuth('/api/posts');