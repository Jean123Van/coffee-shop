import { twMerge } from 'tailwind-merge';

interface GrayShadowedContainerProps {
    children: React.ReactNode;
    className?: string;
}

function GrayShadowedContainer({
    children,
    className,
}: GrayShadowedContainerProps) {
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

interface InputCafeInfoContainerProps {
    title: string;
    children: React.ReactNode;
}

function InputCafeInfoContainer({
    title,
    children,
}: InputCafeInfoContainerProps) {
    return (
        <GrayShadowedContainer>
            <span className="font-bold text-[18px]">{title}</span>
            {children}
        </GrayShadowedContainer>
    );
}

export { GrayShadowedContainer, InputCafeInfoContainer };
