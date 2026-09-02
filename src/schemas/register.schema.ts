import z from 'zod';

const registerSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(20, 'First name should not be more than 20 characters.'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(20, 'Last name should not be more than 20 characters.'),
  email: z.email({ message: 'Please use a valid email address.' }),
  password: z
    .string()
    .min(1, 'Password is required')
    .max(10, 'Password should not be more than 10 characters.'),
});

type RegisterInput = z.infer<typeof registerSchema>;

export { registerSchema, type RegisterInput };
