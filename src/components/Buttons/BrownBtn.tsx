import { twMerge } from 'tailwind-merge';

interface BrownBtnProps {
    className?: string;
    children?: React.ReactNode;
    type?: 'submit';
    onClick?: () => void;
}

function BrownBtn({ className, children, type, onClick }: BrownBtnProps) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={twMerge(
                'bg-milkChocolate text-[white] p-[15px] rounded-[4px] cursor-pointer',
                className,
            )}
        >
            {children}
        </button>
    );
}

export default BrownBtn;
