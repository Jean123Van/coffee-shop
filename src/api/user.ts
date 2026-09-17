import type { UserProfile } from '@/types/user';
import { authApiClient } from './apiClient';

async function getMe(): Promise<UserProfile> {
    const axiosResponse = await authApiClient.get('/api/user/me');
    return axiosResponse.data;
}

export { getMe };
