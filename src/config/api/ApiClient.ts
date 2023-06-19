import axios from 'axios';

let BASE_URL;
switch (import.meta.env.VITE_MODE) {
  case 'local':
    BASE_URL = import.meta.env.VITE_LOCAL_BASE;
    break;
  case 'dev':
    BASE_URL = import.meta.env.VITE_DEV_BASE;
    break;
  case 'prod':
    BASE_URL = import.meta.env.VITE_PROD_BASE;
    break;
  default:
    BASE_URL = import.meta.env.VITE_LOCAL_BASE;
}

const apiClient = axios.create({
  baseURL: BASE_URL, // <- ENV variable
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

const { get, post, put, delete: destroy, patch, postForm, putForm } = apiClient;
export { get, post, put, destroy, patch, postForm, putForm };
