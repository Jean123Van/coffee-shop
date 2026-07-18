import { LuStar } from 'react-icons/lu';
import { COLORS } from '../../theme/colors';

interface TitleHeaderProps {
    totalRating: string;
    totalReviews: string;
    address: string;
    operatingHours: string;
    name: string;
}

function TitleHeader({
    totalRating,
    totalReviews,
    address,
    operatingHours,
    name,
}: TitleHeaderProps) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '20px',
            }}
        >
            <h1
                style={{
                    marginBottom: '7px',
                }}
            >
                {name}
            </h1>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: '5px',
                    gap: '8px',
                    alignItems: 'center',
                }}
            >
                <span
                    style={{
                        fontWeight: 'bold',
                        fontSize: '18px',
                    }}
                >
                    {totalRating}
                </span>
                <div>
                    <LuStar color={COLORS.brown} fill="gold" />
                    <LuStar color={COLORS.brown} fill="gold" />
                    <LuStar color={COLORS.brown} fill="gold" />
                    <LuStar color={COLORS.brown} fill="gold" />
                </div>
                <span
                    style={{
                        color: 'grey',
                        fontSize: '12px',
                    }}
                >
                    ({totalReviews} reviews)
                </span>
            </div>
            <span
                style={{
                    fontSize: '14px',
                    color: 'rgba(57, 57, 57, 1)',
                    marginBottom: '3px',
                }}
            >
                {address}
            </span>
            <span
                style={{
                    fontSize: '14px',
                    color: 'rgba(57, 57, 57, 1)',
                }}
            >
                {operatingHours}
            </span>
        </div>
    );
}

export default TitleHeader;
