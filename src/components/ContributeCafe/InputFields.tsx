import { twMerge } from 'tailwind-merge';
import ToggleSwitch from '../Toggles/ToggleSwitch';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ErrorMessage from '../Text/ErrorMessage';
import type { DaySchedule } from '@/schemas/CreateCafe.schema';
import type { FieldErrors } from 'react-hook-form';

interface InputFieldBaseProps {
    className?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    value?: string;
    isError?: boolean;
}

function InputFieldBase({
    className,
    placeholder,
    onChange,
    value,
    isError,
}: InputFieldBaseProps) {
    return (
        <input
            onChange={(e) => onChange?.(e.currentTarget.value)}
            value={value}
            placeholder={placeholder}
            className={twMerge(
                'border-2 border-lightGray rounded-[5px] text-[17px] p-[5px] text-[grey] outline-none',
                className,
                isError && 'border-[red]',
            )}
        />
    );
}

interface InputCafeInfoProps {
    label: string;
    className?: string;
    onChange?: () => void;
    value?: string;
    error?: string;
}

function InputCafeInfo({
    label,
    className,
    onChange,
    value,
    error,
}: InputCafeInfoProps) {
    return (
        <div className={twMerge('flex flex-col', className)}>
            <label>{label}</label>
            <InputFieldBase
                onChange={onChange}
                value={value}
                isError={!!error}
            />
            <span className="text-[red] text-[13px]">{error}</span>
        </div>
    );
}

interface InputOperatingHoursByDayProps {
    label?: string;
    values: DaySchedule;
    onChange?: (daySchedule: DaySchedule) => void;
    error?: FieldErrors<DaySchedule>;
}

function InputOperatingHoursByDay({
    label,
    values,
    onChange,
    error,
}: InputOperatingHoursByDayProps) {
    const [isClosed, setIsClosed] = useState(!values.isOpen);

    return (
        <div className=" flex flex-col gap-[5px] ">
            <div className=" flex flex-row justify-between">
                <label className="text-[18px]">{label}</label>
                <ToggleSwitch
                    initialValue={isClosed}
                    onChange={() => {
                        onChange?.({
                            ...values,
                            isOpen: isClosed,
                        });
                        setIsClosed((prev) => !prev);
                    }}
                />
            </div>
            <div className="flex flex-col w-[140px]">
                <div className="flex flex-row gap-[5px] items-center relative  ">
                    <AnimatePresence>
                        {isClosed && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="rounded-[8px] flex justify-center items-center absolute inset-0 bg-gray-500/80 font-bold"
                            >
                                CLOSED
                            </motion.span>
                        )}
                    </AnimatePresence>
                    <InputFieldBase
                        className="w-full"
                        placeholder="00:00"
                        isError={!!error?.opening?.message}
                        value={values.opening}
                        onChange={(value) =>
                            onChange?.({
                                ...values,
                                opening: value,
                            })
                        }
                    />
                    -
                    <InputFieldBase
                        className="w-full"
                        placeholder="23:00"
                        isError={!!error?.closing?.message}
                        value={values.closing}
                        onChange={(value) =>
                            onChange?.({
                                ...values,
                                closing: value,
                            })
                        }
                    />
                </div>
                {error?.opening?.message && (
                    <ErrorMessage message={error?.opening?.message} />
                )}
                {error?.closing?.message && (
                    <ErrorMessage message={error?.closing?.message} />
                )}
            </div>
        </div>
    );
}

export { InputFieldBase, InputCafeInfo, InputOperatingHoursByDay };
