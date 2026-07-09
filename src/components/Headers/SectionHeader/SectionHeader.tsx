import { COLORS } from '../../../theme/colors';

interface SectionHeaderProps {
    title?: string;
    onSeeAll?: () => void;
}

function SectionHeader({ title, onSeeAll }: SectionHeaderProps) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: '10px',
            }}
        >
            <h2
                style={{
                    fontSize: '18px',
                    fontWeight: 'normal',
                }}
            >
                {title}
            </h2>
            {onSeeAll && (
                <button
                    style={{
                        border: 'none',
                        backgroundColor: 'transparent',
                        color: COLORS.brown,
                        cursor: 'pointer',
                        fontSize: '13px',
                    }}
                >
                    See all
                </button>
            )}
        </div>
    );
}

export default SectionHeader;
