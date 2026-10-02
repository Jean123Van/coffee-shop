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

function ContributeCafe() {
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

    const onSubmitHandler = (data: CreateCafeInput) => {
        console.log(data);
    };

    return (
        <div>
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
