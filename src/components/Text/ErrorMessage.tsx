interface ErrorMessageProps {
    message?: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
    return <span className="text-[red] text-[13px]">{message}</span>;
}

export default ErrorMessage;
