import coffee from '@/assets/coffee.png';

interface CoffeeLoadingProps {
    size?: number;
}

function CoffeeLoadingAnimation({ size = 30 }: CoffeeLoadingProps) {
    return (
        <img
            src={coffee}
            width={size}
            height={size}
            className="animate-[wiggle_1s_ease-in_infinite]"
        />
    );
}

export default CoffeeLoadingAnimation;
