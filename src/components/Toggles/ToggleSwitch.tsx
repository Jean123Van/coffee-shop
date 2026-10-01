import { useState } from 'react';

interface ToggleSwitchProps {
    initialValue: boolean;
    onChange?: (value: boolean) => void;
}

export default function ToggleSwitch({
    initialValue = false,
    onChange,
}: ToggleSwitchProps) {
    const [enabled, setEnabled] = useState(initialValue);

    const handleToggle = () => {
        const nextState = !enabled;
        setEnabled(nextState);
        if (onChange) onChange(nextState);
    };

    return (
        <label className="inline-flex items-center cursor-pointer select-none">
            <input
                type="checkbox"
                checked={enabled}
                onChange={handleToggle}
                className="sr-only peer"
            />

            <div
                className={`
                    relative w-9 h-[18px] rounded-full transition-colors duration-200 ease-in-out
                     ${enabled ? 'bg-red-500' : 'bg-emerald-600'}   
                `}
            >
                <div
                    className={`
                        absolute top-[2px] left-[2px] w-[14px] h-[14px] bg-white rounded-full shadow-md 
                        transition-transform duration-200 ease-in-out
                        ${enabled ? 'translate-x-[18px]' : 'translate-x-0'}
                    `}
                />
            </div>
        </label>
    );
}
