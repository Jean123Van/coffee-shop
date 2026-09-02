import { baseUrl } from '@/constants/env';
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});
