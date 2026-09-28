interface BrownContainerLabelProps {
    label: string;
}

function BrownContainerLabel({ label }: BrownContainerLabelProps) {
    return <span className="text-[20px] font-bold text-brown">{label}</span>;
}

export { BrownContainerLabel };
