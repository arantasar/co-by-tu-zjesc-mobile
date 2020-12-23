import axios from 'axios';
import {URL_BASE} from '../config/config';

const config = {
  baseURL: URL_BASE,
};

const instance = axios.create(config);

export default instance;
