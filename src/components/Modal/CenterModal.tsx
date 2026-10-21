import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

interface CenterModalProps {
    children?: React.ReactNode;
    className?: string;
    isActive?: boolean;
    onDismiss?: () => void;
}

function CenterModal({
    children,
    className,
    isActive,
    onDismiss,
}: CenterModalProps) {
    if (!isActive) {
        return;
    }

    return createPortal(
        <div
            className="fixed w-screen h-screen bg-gray-500/50 top-[0] flex items-center justify-center p-[30px]"
            onClick={onDismiss}
        >
            <div
                className={twMerge(
                    'bg-[white] rounded-[15px] flex flex-col p-[20px] items-center ',
                    className,
                )}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        document.body,
    );
}

export default CenterModal;
