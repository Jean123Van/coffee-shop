interface CircleSkeletonProps {
    width?: string;
    height?: string;
    className?: string;
}

function CircleSkeleton({
    height = '100%',
    width = '100%',
    className,
}: CircleSkeletonProps) {
    return (
        <div
            className={`animate-pulse rounded-[100%] bg-gray-200 ${className}`}
            style={{
                width,
                height,
            }}
        />
    );
}

export default CircleSkeleton;
