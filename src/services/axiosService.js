import * as axios from 'axios';

let axiosService = axios.create({
  baseURL: 'http://localhost:8848/api/',
  timeout: 2000
});

let getNewAccessToken = () => {
  let refreshToken = localStorage.getItem('refreshToken');

  return axiosService({
    url: 'refresh',
    method: 'get',
    headers: { Authorization: refreshToken }
  })
    .then(res => res)
    .catch(err => err);
};

axiosService.interceptors.response.use(
  res => res,
  err => {
    let res = err.response;

    if (res.status === 401) {
      let tempConfig = res.config;

      return getNewAccessToken()
        .then(value => {
          axiosService.defaults.headers['Authorization'] =
            value.data.accessToken;
          tempConfig.headers['Authorization'] = value.data.accessToken;

          return axiosService
            .request(tempConfig)
            .then(response => response)
            .catch(err => err);
        })
        .catch(err => {
          console.log('Refresh Token Error:', err);

          return err;
        });
    }

    return Promise.reject(err);
  }
);

export default axiosService;
