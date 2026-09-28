import { twMerge } from 'tailwind-merge';
import { MdCameraAlt } from 'react-icons/md';
import { LuPlus } from 'react-icons/lu';
import BrownBtn from '@/components/Buttons/BrownBtn';

function BrownContainerLabel({ label }: { label: string }) {
    return <span className="text-[20px] font-bold text-brown">{label}</span>;
}

function InputFieldBase({
    className,
    placeholder,
}: {
    className?: string;
    placeholder?: string;
}) {
    return (
        <input
            placeholder={placeholder}
            className={twMerge(
                'border-2 border-lightGray rounded-[5px] text-[17px] p-[5px] text-[grey] outline-none',
                className,
            )}
        />
    );
}

function InputCafeInfo({
    label,
    className,
}: {
    label: string;
    className?: string;
}) {
    return (
        <div className={twMerge('flex flex-col', className)}>
            <label>{label}</label>
            <InputFieldBase />
        </div>
    );
}

function GrayShadowedContainer({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={twMerge(
                'border border-lightGray rounded-[8px] p-[10px] mt-[5px]! shadow-md',
                className,
            )}
        >
            {children}
        </div>
    );
}

function InputCafeInfoContainer({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <GrayShadowedContainer>
            <span className="font-bold text-[18px]">{title}</span>
            {children}
        </GrayShadowedContainer>
    );
}

function InputOperatingHoursByDay({ label }: { label?: string }) {
    return (
        <div className=" flex flex-col gap-[5px] ">
            <label className="text-[18px]">{label}</label>
            <div className="flex flex-row gap-[5px] items-center">
                <InputFieldBase className="w-[60px] " placeholder="00:00" />
                -
                <InputFieldBase className="w-[60px]" placeholder="23:00" />
            </div>
        </div>
    );
}

function UploadPhotoBoxBtn() {
    return (
        <div className="border border-dashed text-[30px] w-[70px] h-[70px] rounded-[5px] border-brown flex flex-row items-center justify-center">
            <LuPlus className="text-[gray]" />
        </div>
    );
}

function ContributeCafe() {
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
                            <InputCafeInfo
                                label="Cafe Name"
                                className="w-[40%]"
                            />
                            <InputCafeInfo
                                label="Address / Location"
                                className="w-[60%]"
                            />
                        </div>
                    </InputCafeInfoContainer>
                </section>
                <InputCafeInfoContainer title="Operating Hours">
                    <div className="flex flex-wrap gap-[15px]">
                        <InputOperatingHoursByDay label="Monday" />
                        <InputOperatingHoursByDay label="Tuesday" />
                        <InputOperatingHoursByDay label="Wednesday" />
                        <InputOperatingHoursByDay label="Thursday" />
                        <InputOperatingHoursByDay label="Friday" />
                        <InputOperatingHoursByDay label="Saturday" />
                        <InputOperatingHoursByDay label="Sunday" />
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
                            <UploadPhotoBoxBtn />
                            <UploadPhotoBoxBtn />
                            <UploadPhotoBoxBtn />
                            <UploadPhotoBoxBtn />
                            <UploadPhotoBoxBtn />
                            <UploadPhotoBoxBtn />
                            <UploadPhotoBoxBtn />
                            <UploadPhotoBoxBtn />
                        </div>
                    </div>
                </section>
                <GrayShadowedContainer className="flex flex-col">
                    <textarea className="mb-[5px]! h-[100px] border-2 border-lightGray rounded-[5px] text-[17px] text-[grey] outline-none p-[5px]" />
                    <span className="text-[15px] mb-[10px]!">
                        A short engaging description of the coffee shop.
                    </span>
                    <BrownBtn className="py-[5px] self-end">
                        Submit for Review
                    </BrownBtn>
                </GrayShadowedContainer>
            </div>
        </div>
    );
}

export default ContributeCafe;
