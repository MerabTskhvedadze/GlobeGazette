import axios from 'axios';
import config from '../config';

const axiosInstance = axios.create({
  baseURL: config.API_URL,
});

axiosInstance.interceptors.request.use((conf) => {
  conf.headers['X-api-key'] = config.API_KEY;

  return conf;
});

export default axiosInstance;
