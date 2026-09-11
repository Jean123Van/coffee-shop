interface CenterAuthBrownLayoutProps {
    children?: React.ReactNode;
}

function CenterAuthBrownLayout({ children }: CenterAuthBrownLayoutProps) {
    return (
        <div className="flex justify-center items-center py-[30px] min-h-screen bg-brown">
            {children}
        </div>
    );
}

export default CenterAuthBrownLayout;
