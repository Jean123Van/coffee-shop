import z from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; //5mb limit

const dayScheduleSchema = z
    .object({
        isOpen: z.boolean(),
        opening: z.string(),
        closing: z.string(),
    })
    .superRefine((data, ctx) => {
        let hasInputError = false;

        if (!data.isOpen) return;

        if (!data.opening.trim()) {
            ctx.addIssue({
                code: 'custom',
                message: 'Opening time is required.',
                path: ['opening'],
            });
            hasInputError = true;
        }

        if (!data.closing.trim()) {
            ctx.addIssue({
                code: 'custom',
                message: 'Closing time is required.',
                path: ['closing'],
            });
            hasInputError = true;
        }

        if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(data.opening.trim())) {
            ctx.addIssue({
                code: 'custom',
                message: 'Opening time must be HH:MM (e.g., 09:00 or 23:00).',
                path: ['opening'],
            });
            hasInputError = true;
        }

        if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(data.closing.trim())) {
            ctx.addIssue({
                code: 'custom',
                message: 'Closing time must be HH:MM (e.g., 09:00 or 23:00).',
                path: ['closing'],
            });
            hasInputError = true;
        }

        if (hasInputError) return;

        function timeToNumber(time: string) {
            return Number(time.replace(':', ''));
        }

        const openingTime = timeToNumber(data.opening);
        const closingTime = timeToNumber(data.closing);

        if (openingTime > closingTime) {
            ctx.addIssue({
                code: 'custom',
                message: 'Opening time must not be later than closing time',
                path: ['opening'],
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
    cafeImages: z
        .array(
            z
                .custom<File | undefined>()
                .refine(
                    (file) => !file || MAX_FILE_SIZE >= file.size,
                    'Image must be 5mb or less',
                )
                .refine(
                    (file) => !file || file.type.startsWith('image/'),
                    'Image should be valid image file type',
                ),
        )
        .length(8)
        .refine(
            (files) => files.some((file) => file instanceof File),
            'An image is required',
        ),
});

type CreateCafeInput = z.infer<typeof createCafeSchema>;

type DaySchedule = z.infer<typeof dayScheduleSchema>;

export { createCafeSchema, type CreateCafeInput, type DaySchedule };
