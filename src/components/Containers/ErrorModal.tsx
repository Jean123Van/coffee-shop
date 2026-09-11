interface ErrorModalProps {
    message?: string;
}

function ErrorModal({
    message = 'Something went wrong. Please try again.',
}: ErrorModalProps) {
    return (
        <span className="text-red-500 text-[13px] border text-center rounded-[5px] p-[5px]">
            {message}
        </span>
    );
}

export default ErrorModal;
