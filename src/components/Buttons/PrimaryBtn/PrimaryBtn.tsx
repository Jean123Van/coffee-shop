interface PrimaryBtnProps {
    variant?: 'light' | 'dark';
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

function PrimaryBtn({ variant = 'dark', children, style }: PrimaryBtnProps) {
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
                ...(variant === 'light' ? lightVariant : darkVariant),
                ...style,
            }}
        >
            {children}
        </button>
    );
}

export default PrimaryBtn;
