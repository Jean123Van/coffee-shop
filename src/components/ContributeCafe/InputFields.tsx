import { twMerge } from 'tailwind-merge';

interface InputFieldBaseProps {
    className?: string;
    placeholder?: string;
    onChange?: () => void;
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
            onChange={onChange}
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
}

function InputOperatingHoursByDay({ label }: InputOperatingHoursByDayProps) {
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

export { InputFieldBase, InputCafeInfo, InputOperatingHoursByDay };
