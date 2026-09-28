import z from 'zod';

const createCafeSchema = z.object({
    cafeName: z.string().min(1, 'Name is required').max(20, 'Name is too long'),
    cafeAddress: z
        .string()
        .min(1, 'Address is required')
        .max(50, 'Address is too long'),
    cafeAboutUs: z.string().optional(),
});

type CreateCafeInput = z.infer<typeof createCafeSchema>;

export { createCafeSchema, type CreateCafeInput };
