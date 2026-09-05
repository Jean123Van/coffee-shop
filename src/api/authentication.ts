import type { RegisterInput } from '@/schemas/register.schema';
import { apiClient } from './apiClient';

async function registerUser(registerInput: RegisterInput) {
  return await apiClient.post('/api/auth/register', registerInput);
}

export { registerUser };
