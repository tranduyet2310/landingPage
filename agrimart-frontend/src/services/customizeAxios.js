import axios from "axios";

const instance = axios.create({
  baseURL: 'https://reqres.in',
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default instance;

// const axiosClient = axios.create({
//   baseURL: 'http://localhost:8080',
// });
// axiosClient.interceptors.request.use(
//   config => {
//     const accessToken = localStorage.getItem('accessToken');
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   error => {
//     Promise.reject(error);
//   }
// );

// export default axiosClient;