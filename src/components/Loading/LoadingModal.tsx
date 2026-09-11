import CoffeeLoadingAnimation from './CoffeeLoading';

function LoadingModal() {
    return (
        <div
            style={{
                margin: 'auto',

                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
            }}
        >
            <CoffeeLoadingAnimation />
            <span
                style={{
                    paddingTop: '10px',
                }}
            >
                Brewing...
            </span>
        </div>
    );
}

export default LoadingModal;
