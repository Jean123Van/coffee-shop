interface MainPageSectionContainerProps {
    title: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

function MainPageSectionContainer({
    title,
    children,
    style,
}: MainPageSectionContainerProps) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',

                ...style,
            }}
        >
            <span
                style={{
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginBottom: '5px',
                }}
            >
                {title}
            </span>
            {children}
        </div>
    );
}

export default MainPageSectionContainer;
