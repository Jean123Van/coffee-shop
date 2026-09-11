import z from 'zod';

const loginSchema = z.object({
    email: z.email('Please use a valid email address.'),
    password: z.string().min(1, 'Password is required.'),
});

type LoginInput = z.infer<typeof loginSchema>;

export { loginSchema, type LoginInput };
