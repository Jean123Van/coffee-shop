interface MainPageSectionContainerProps {
    title: string;
    children: React.ReactNode;
}

function MainPageSectionContainer({
    title,
    children,
}: MainPageSectionContainerProps) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
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
