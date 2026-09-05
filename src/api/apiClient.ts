import { baseUrl } from '@/constants/env';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { apiClient };
