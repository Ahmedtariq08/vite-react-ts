import axios from 'axios';

// const { env } = import.meta;
// let BASE_URL;
// switch (env.VITE_MODE) {
//   case 'local':
//     BASE_URL = env.VITE_LOCAL_BASE;
//     break;
//   case 'dev':
//     BASE_URL = env.VITE_DEV_BASE;
//     break;
//   case 'prod':
//     BASE_URL = env.VITE_PROD_BASE;
//     break;
//   default:
//     BASE_URL = env.VITE_LOCAL_BASE;
// }
// console.log(BASE_URL);
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_LOCAL_BASE, // <- ENV variable
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

// apiClient.interceptors.request.use((config) => {
//   return ({
//     ...config,
//     headers: {
//       crede
//     },
//   })
// },
//   error => Promise.reject(error),
// );

// apiClient.interceptors.response.use((response) =>
//   response,
//   async (error) => {
//     ...
//     return Promise.reject(error.response.data);
//   },
// );

const { get, post, put, delete: destroy, patch, postForm, putForm } = apiClient;
export { get, post, put, destroy, patch, postForm, putForm };
