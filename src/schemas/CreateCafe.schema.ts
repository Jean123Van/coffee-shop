import z from 'zod';

const dayScheduleSchema = z
    .object({
        isOpen: z.boolean(),
        opening: z.string(),
        closing: z.string(),
    })
    .superRefine((data, ctx) => {
        if (!data.isOpen) return;

        if (!data.opening.trim()) {
            ctx.addIssue({
                code: 'custom',
                message: 'Opening time is required.',
                path: ['opening'],
            });
        }

        if (!data.closing.trim()) {
            ctx.addIssue({
                code: 'custom',
                message: 'Closing time is required.',
                path: ['closing'],
            });
        }
    });

const createCafeSchema = z.object({
    cafeName: z.string().min(1, 'Name is required').max(20, 'Name is too long'),
    cafeAddress: z
        .string()
        .min(1, 'Address is required')
        .max(50, 'Address is too long'),
    cafeAboutUs: z.string().optional(),
    cafeSchedule: z.object({
        monday: dayScheduleSchema,
        tuesday: dayScheduleSchema,
        wednesday: dayScheduleSchema,
        thursday: dayScheduleSchema,
        friday: dayScheduleSchema,
        saturday: dayScheduleSchema,
        sunday: dayScheduleSchema,
    }),
});

type CreateCafeInput = z.infer<typeof createCafeSchema>;

type DaySchedule = z.infer<typeof dayScheduleSchema>;

export { createCafeSchema, type CreateCafeInput, type DaySchedule };
