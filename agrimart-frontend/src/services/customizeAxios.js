import axios from "axios";

const instance = axios.create({
  baseURL: 'https://tranduyet.online/',
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    console.log(error)
    let res = {};
    if(error.response){
      res.data = error.response.data;
      res.status = error.response.status;
      res.headers = error.response.headers;
      console.log(error.response)
    } else if(error.request){
      console.log(error.request)
    } else {
      console.log("Error", error.message)
    }
    return res;
  });

instance.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

export default instance;
