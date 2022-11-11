

import axios, { type AxiosRequestConfig } from 'axios';
import BASE_URL from './BaseUrl';

export const getPages = (params: AxiosRequestConfig) => axios.get(`${BASE_URL}/pages`, { params });