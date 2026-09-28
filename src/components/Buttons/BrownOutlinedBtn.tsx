interface BrownOutlinedBtnProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

function BrownOutlinedBtn({ children, onClick }: BrownOutlinedBtnProps) {
    return (
        <button
            className="border-2 py-1 px-2 rounded-lg font-bold border-brown text-brown mr-[10px]! cursor-pointer hover:bg-brown hover:text-[white] duration-200"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default BrownOutlinedBtn;
