import axios from "axios";

const instance = axios.create({
  baseURL: 'https://reqres.in',
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    let res = {};
    if(error.response){
      res.data = error.response.data;
      res.status = error.response.status;
      res.headers = error.response.headers;
    } else if(error.request){
      console.log(error.request)
    } else {
      console.log("Error", error.message)
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // return Promise.reject(error);
    return res;
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