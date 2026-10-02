import React, { useEffect, useMemo, useRef } from 'react';
import { LuPlus } from 'react-icons/lu';
import { FiX } from 'react-icons/fi';

interface UploadPhotoBoxBtnProps {
    image?: File;
    onUpload?: (image?: File) => void;
}

function UploadPhotoBoxBtn({ image, onUpload }: UploadPhotoBoxBtnProps) {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const previewUrl = useMemo(() => {
        if (image) {
            return URL.createObjectURL(image);
        }
    }, [image]);

    useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    return (
        <>
            <input
                ref={fileInputRef}
                className="hidden"
                type="file"
                accept="image/*"

                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const file = e.target.files?.[0];
                    onUpload?.(file);
                }}
            />
            <div className="border border-dashed rounded-[5px] w-[70px] h-[70px] relative">
                {previewUrl ? (
                    <>
                        <button
                            className="absolute right-[-10px] top-[-10px] cursor-pointer"
                            onClick={() => {
                                onUpload?.(undefined);
                            }}
                        >
                            <FiX className="text-[red] w-[20px] h-[20px]  border bg-[white]  rounded-full p-[3px] " />
                        </button>

                        <img
                            src={previewUrl}
                            className="object-cover w-full h-full rounded-[5px]"
                        />
                    </>
                ) : (
                    <button
                        className=" text-[30px] w-full h-full border-brown flex flex-row items-center justify-center cursor-pointer"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <LuPlus className="text-[gray]" />
                    </button>
                )}
            </div>
        </>
    );
}

export default UploadPhotoBoxBtn;
