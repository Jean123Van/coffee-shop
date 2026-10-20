import { baseUrl } from '@/constants/env';
import axios from 'axios';

const apiClient = axios.create({
    baseURL: baseUrl,
});

const authApiClient = axios.create({
    baseURL: baseUrl,
});

authApiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export { apiClient, authApiClient };
