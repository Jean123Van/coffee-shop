interface RectangleSkeleton {
    width?: string;
    height?: string;
    className?: string;
}

function RectangleSkeleton({
    width = '100%',
    height = '100%',
    className,
}: RectangleSkeleton) {
    return (
        <div
            className={`animate-pulse rounded bg-gray-200 ${className}`}
            style={{
                width,
                height,
            }}
        />
    );
}

export default RectangleSkeleton;
