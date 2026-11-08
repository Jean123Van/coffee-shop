import type { CreateCafeInput } from '@/schemas/CreateCafe.schema';
import { authApiClient } from './apiClient';

async function createCafe(data: CreateCafeInput): Promise<{ id: number }> {
    const filteredImages = data.cafeImages.filter(
        (image): image is File => image !== undefined,
    );

    const filteredSchedule = Object.fromEntries(
        Object.entries(data.cafeSchedule).filter(
            ([, schedule]) => schedule.isOpen,
        ),
    );

    const formData = new FormData();
    formData.append('cafeName', data.cafeName);
    formData.append('cafeAddress', data.cafeAddress);
    if (data.cafeAboutUs) {
        formData.append('cafeAboutUs', data.cafeAboutUs);
    }
    formData.append('cafeSchedule', JSON.stringify(filteredSchedule));
    filteredImages.forEach((file) => {
        formData.append('images', file);
    });

    const axiosResponse = await authApiClient.post(
        '/api/cafe/add-new',
        formData,
    );
    return axiosResponse.data;
}

async function fetchCafeById(cafeId: string) {
    const axiosResponse = await authApiClient.get(`/api/cafe/${cafeId}`);

    return axiosResponse.data;
}

export { createCafe, fetchCafeById };
