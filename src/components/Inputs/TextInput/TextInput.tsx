import { LuUser, LuMail, LuLock, LuEye, LuEyeOff } from 'react-icons/lu';
import { COLORS } from '../../../theme/colors';
import { useState } from 'react';

type TextInputType = 'text' | 'email' | 'password';
interface TextInputProps {
  label?: string;
  placeholder?: string;
  type?: TextInputType;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  errorMsg?: string;
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
  onChange = () => {},
  value,
  errorMsg,
}: TextInputProps) {
  const Icon = icons[type];

  const [showPassword, setShowPassword] = useState(false);

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
          border: errorMsg ? `1px solid red` : `1px solid ${COLORS.lightGray}`,
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
          type={type === 'password' && !showPassword ? 'password' : 'text'}
          placeholder={placeholder}
          style={{
            border: 'none',
            color: 'grey',
            outline: 'none',
            width: '100%',
          }}
          onChange={onChange}
          value={value}
        />
        {type === 'password' && (
          <button
            onClick={() => setShowPassword((prev) => !prev)}
            style={{
              border: 'transparent',
              padding: '0',
              backgroundColor: 'transparent',
              display: 'flex',
              cursor: 'pointer',
            }}
          >
            {showPassword ? <LuEyeOff /> : <LuEye />}
          </button>
        )}
      </div>
      {errorMsg && (
        <span style={{ color: 'red', fontSize: '10px' }}>{errorMsg}</span>
      )}
    </div>
  );
}

export default TextInput;
