import { MdCameraAlt } from 'react-icons/md';

import BrownBtn from '@/components/Buttons/BrownBtn';
import { BrownContainerLabel } from '@/components/ContributeCafe/Labels';
import {
    GrayShadowedContainer,
    InputCafeInfoContainer,
} from '@/components/ContributeCafe/Containers';
import {
    InputCafeInfo,
    InputOperatingHoursByDay,
} from '@/components/ContributeCafe/InputFields';
import UploadPhotoBoxBtn from '@/components/ContributeCafe/UploadPhotoBoxBtn';
import { Controller, useForm } from 'react-hook-form';
import {
    type CreateCafeInput,
    createCafeSchema,
} from '@/schemas/CreateCafe.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { createCafe } from '@/api/cafe';
import CenterModal from '@/components/Modal/CenterModal';
import spilled_coffee from '@/assets/spilled_coffee.png';
import coffee_mug from '@/assets/coffee_mug.png';
import { useNavigate } from 'react-router-dom';

function LoadingModal({ isActive }: { isActive: boolean }) {
    return (
        <CenterModal isActive={isActive}>
            <img
                src={coffee_mug}
                width={70}
                height={70}
                className="animate-[pour_1.5s_ease-in_infinite] mb-[15px]!"
            />
            <h1 className="text-brown font-bold">Loading please wait</h1>
        </CenterModal>
    );
}

function ErrorCreationModal({
    isActive,
    onClose,
}: {
    isActive: boolean;
    onClose: () => void;
}) {
    return (
        <CenterModal
            className="max-w-[400px] shadow-lg"
            isActive={isActive}
            onDismiss={onClose}
            type="error"
        >
            <img src={spilled_coffee} height={120} width={120} />
            <span className="text-lg font-bold text-[#5C1D1D] mb-[15px]!">
                Failed to Create
            </span>
            <span className="text-brown text-sm w-full">
                Hmn... Something wrong seem to have happened.
            </span>
            <span className="text-brown text-sm w-full">
                Please try again later or contact customer support if issue
                persists.
            </span>
            <BrownBtn
                className="py-[10px] px-[20px] mt-[15px]!"
                onClick={onClose}
            >
                {' '}
                Ok
            </BrownBtn>
        </CenterModal>
    );
}

function ContributeCafe() {
    const navigate = useNavigate();

    const defaultDaySched = {
        isOpen: true,
        opening: '',
        closing: '',
    };

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateCafeInput>({
        resolver: zodResolver(createCafeSchema),
        defaultValues: {
            cafeName: '',
            cafeAddress: '',
            cafeAboutUs: '',
            cafeSchedule: {
                monday: defaultDaySched,
                tuesday: defaultDaySched,
                wednesday: defaultDaySched,
                thursday: defaultDaySched,
                friday: defaultDaySched,
                saturday: defaultDaySched,
                sunday: defaultDaySched,
            },
            cafeImages: [
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
            ],
        },
    });

    const daysOfTheWeek = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
    ] as const;

    const { mutate, isError, reset, isPending } = useMutation({
        mutationFn: createCafe,
        onSuccess: (data) => {
            navigate(`/cafe/${data.id}`);
        },
    });

    const onSubmitHandler = (data: CreateCafeInput) => {
        mutate(data);
    };

    return (
        <div>
            {/* Error Creation Modal */}
            <ErrorCreationModal isActive={isError} onClose={reset} />
            {/*  */}
            {/* Creation Loading Modal */}
            <LoadingModal isActive={isPending} />
            {/*  */}
            <h1 className="text-[50px] font-bold text-brown">
                Contribute a Cafe
            </h1>
            <h2 className="text-[20px] mb-[15px]!">
                Know a great coffee spot? Add it to our community map!
            </h2>
            <div className="flex flex-col gap-[15px]">
                <section>
                    <BrownContainerLabel label="CAFE DETAILS" />
                    <InputCafeInfoContainer title="Cafe Information">
                        <div className="flex flex-row gap-[10px]">
                            {' '}
                            <Controller
                                control={control}
                                name="cafeName"
                                render={({
                                    field: { onChange, value },
                                    fieldState: { error },
                                }) => (
                                    <InputCafeInfo
                                        onChange={onChange}
                                        value={value}
                                        label="Cafe Name"
                                        className="w-[40%]"
                                        error={error?.message}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="cafeAddress"
                                render={({
                                    field: { onChange, value },
                                    fieldState: { error },
                                }) => (
                                    <InputCafeInfo
                                        onChange={onChange}
                                        value={value}
                                        label="Address / Location"
                                        className="w-[60%]"
                                        error={error?.message}
                                    />
                                )}
                            />
                        </div>
                    </InputCafeInfoContainer>
                </section>
                <InputCafeInfoContainer title="Operating Hours">
                    <div className="flex flex-wrap gap-[15px]">
                        {daysOfTheWeek.map((day) => (
                            <Controller
                                key={day}
                                control={control}
                                name={`cafeSchedule.${day}`}
                                render={({
                                    field: { onChange, value },
                                    fieldState: { error },
                                }) => (
                                    <InputOperatingHoursByDay
                                        label={
                                            day.charAt(0).toUpperCase() +
                                            day.slice(1)
                                        }
                                        values={value}
                                        onChange={onChange}
                                        error={error}
                                    />
                                )}
                            />
                        ))}
                    </div>
                </InputCafeInfoContainer>
                <section>
                    <BrownContainerLabel label="CAFE PICTURES" />
                    <div className="bg-warmBrown border-2 border-brown rounded-[8px] py-[20px] px-[15px] flex flex-col items-center">
                        <div className="flex flex-row items-center gap-[5px]">
                            <MdCameraAlt className="w-6 h-6 text-brown" />
                            <span className="font-bold text-brown">
                                UPLOAD PHOTOS
                            </span>
                        </div>
                        <div className="flex flex-wrap mt-[10px]! gap-[12px]">
                            {Array.from({ length: 8 }, (_, index) => (
                                <Controller
                                    key={index}
                                    control={control}
                                    name={`cafeImages.${index}`}
                                    render={({
                                        field: { value, onChange },
                                    }) => (
                                        <UploadPhotoBoxBtn
                                            image={value}
                                            onUpload={onChange}
                                        />
                                    )}
                                />
                            ))}
                        </div>
                        {errors.cafeImages?.root?.message && (
                            <span className="mt-[10px]! text-[red]">
                                {errors.cafeImages.root.message}
                            </span>
                        )}
                    </div>
                </section>
                <GrayShadowedContainer className="flex flex-col">
                    <Controller
                        control={control}
                        name="cafeAboutUs"

                        render={({ field: { onChange, value } }) => (
                            <textarea
                                onChange={onChange}
                                value={value}
                                className="mb-[5px]! h-[100px] border-2 border-lightGray rounded-[5px] text-[17px] text-[grey] outline-none p-[5px]"
                                placeholder="ABOUT US"
                            />
                        )}
                    />

                    <span className="text-[15px] mb-[10px]!">
                        A short engaging description of the coffee shop.
                    </span>
                    <BrownBtn
                        className="py-[5px] self-end"
                        onClick={handleSubmit(onSubmitHandler)}
                    >
                        Submit for Review
                    </BrownBtn>
                </GrayShadowedContainer>
            </div>
        </div>
    );
}

export default ContributeCafe;
