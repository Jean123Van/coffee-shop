import { LuUser, LuMail, LuLock } from 'react-icons/lu';
import { COLORS } from '../../../theme/colors';

type TextInputType = 'text' | 'email' | 'password';
interface TextInputProps {
    label?: string;
    placeholder?: string;
    type?: TextInputType;
}

const icons = {
    text: LuUser,
    email: LuMail,
    password: LuLock,
};

function TextInput({
    label = '',
    placeholder = '',
    type = 'text',
}: TextInputProps) {
    const Icon = icons[type];

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
                    padding: '9px',
                    gap: '10px',
                }}
            >
                <Icon />
                <input
                    placeholder={placeholder}
                    style={{
                        border: 'none',
                        color: 'grey',
                        outline: 'none',
                        width: '100%',
                    }}
                />
            </div>
        </div>
    );
}

export default TextInput;
