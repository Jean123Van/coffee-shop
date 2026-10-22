import {
    AnimatePresence,
    motion,
    type TargetAndTransition,
} from 'framer-motion';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

type ModalType = 'error';
interface CenterModalProps {
    children?: React.ReactNode;
    className?: string;
    isActive?: boolean;
    onDismiss?: () => void;
    type?: ModalType;
}

function CenterModal({
    children,
    className,
    isActive,
    onDismiss,
    type,
}: CenterModalProps) {
    useEffect(() => {
        if (!isActive) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isActive]);

    const animations = {
        error: {
            x: [0, -3, 3, -3, 3, -2, 2, 0],
            transition: {
                duration: 0.4,
                ease: 'linear',
            },
        },
    } satisfies Record<string, TargetAndTransition>;

    if (!isActive) {
        return;
    }

    return createPortal(
        <AnimatePresence>
            <motion.div
                className="fixed w-screen h-screen bg-gray-500/50 top-[0] flex items-center justify-center p-[30px]"
                onClick={onDismiss}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    className={twMerge(
                        'bg-[white] rounded-[15px] flex flex-col p-[20px] items-center ',
                        className,
                    )}

                    onClick={(e) => e.stopPropagation()}
                    animate={type && animations[type]}
                >
                    {children}
                </motion.div>
            </motion.div>
        </AnimatePresence>,
        document.body,
    );
}

export default CenterModal;
