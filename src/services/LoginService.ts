export interface User {
  username: string;
  password: string;
}

import axios from 'axios';
import { BASE_URL_AUTH } from './BaseUrl';

export const loginService = (user: User) => axios.post(`${BASE_URL_AUTH}/token`, user);
