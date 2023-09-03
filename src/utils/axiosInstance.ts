import axios from 'axios';
import config from '../config';

const axiosInstance = axios.create({
  baseURL: config.API_URL,
});

axiosInstance.interceptors.request.use((conf: any) => {
  conf.headers['X-Api-Key'] = config.API_KEY;
  conf.headers['Authorization'] = config.API_KEY;

  return conf;
});

export default axiosInstance;
