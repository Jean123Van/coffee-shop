import { LuUser } from 'react-icons/lu';
import { COLORS } from '../../../theme/colors';

interface TextInputProps {
    label?: string;
    placeholder?: string;
}

function TextInput({ label = '', placeholder = '' }: TextInputProps) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
            }}
        >
            <label
                style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                }}
            >
                {label}
            </label>
            <div
                style={{
                    border: `1px solid ${COLORS.lightGray}`,
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '7px',
                    gap: '10px',
                }}
            >
                <LuUser />
                <input
                    placeholder={placeholder}
                    style={{ border: 'none', color: 'grey', outline: 'none' }}
                />
            </div>
        </div>
    );
}

export default TextInput;
