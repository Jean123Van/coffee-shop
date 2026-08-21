import './primaryBtn.css';

interface PrimaryBtnProps {
    variant?: 'light' | 'dark';
    children?: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: () => void;
}

function PrimaryBtn({
    variant = 'dark',
    children,
    style,
    onClick,
}: PrimaryBtnProps) {
    const lightVariant = {
        backgroundColor: 'white',
        color: 'black',
    };
    const darkVariant = {
        backgroundColor: 'black',
        color: 'white',
    };

    return (
        <button
            style={{
                border: 'none',
                borderRadius: '6px',
                padding: '7px 10px 7px 10px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                ...(variant === 'light' ? lightVariant : darkVariant),
                ...style,
            }}
            onClick={onClick}
            className={'primary-btn'}
        >
            {children}
        </button>
    );
}

export default PrimaryBtn;
