import type { IconType } from 'react-icons';
import { COLORS } from '../../../theme/colors';

interface HighlightsProps {
    icon: IconType;
    name: string;
}

function HighlightsTile({ icon: Icon, name }: HighlightsProps) {
    return (
        <div
            style={{
                boxShadow: '0 0 5px rgba(109, 76, 65, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                padding: '10px 15px',
                borderRadius: '7px',
                gap: '10px',
                alignItems: 'center',
                minWidth: '80px',
            }}
        >
            <Icon color={COLORS.brown} size={22} />
            <span
                style={{
                    fontSize: '12px',
                    textAlign: 'center',
                }}
            >
                {name}
            </span>
        </div>
    );
}

export default HighlightsTile;
