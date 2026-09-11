import type { RegisterInput } from '@/schemas/register.schema';
import { apiClient } from './apiClient';
import type { LoginInput } from '@/schemas/login.schema';
import type { LoginResponse } from '@/types/login';

async function registerUser(registerInput: RegisterInput) {
    return await apiClient.post('/api/auth/register', registerInput);
}

async function loginUser(loginInput: LoginInput): Promise<LoginResponse> {
    const response = await apiClient.post('/api/auth/login', loginInput);
    return response.data;
}

export { registerUser, loginUser };
