import TextInput from '../components/Inputs/TextInput/TextInput';
import RegisterLayoutContainer from '../components/Register/RegisterLayoutContainer';
import { COLORS } from '../theme/colors';
import { useForm, Controller } from 'react-hook-form';
import { registerSchema, type RegisterInput } from '@/schemas/register.schema';
import { zodResolver } from '@hookform/resolvers/zod';

function Register() {
  const { control, handleSubmit } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    },
  });

  const onSubmitHandler = (registerInput: RegisterInput) => {
    console.log(registerInput);
  };

  return (
    <RegisterLayoutContainer type={'register'}>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          width: '100%',
        }}
      >
        <Controller
          control={control}
          name="firstName"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextInput
              label="First name"
              placeholder="Enter your first name"
              onChange={onChange}
              value={value}
              errorMsg={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextInput
              label="Last name"
              placeholder="Enter your last name"
              onChange={onChange}
              value={value}
              errorMsg={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextInput
              label="Email"
              placeholder="Enter your email"
              type={'email'}
              onChange={onChange}
              value={value}
              errorMsg={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextInput
              label="Password"
              placeholder="Create a password"
              type={'password'}
              onChange={onChange}
              value={value}
              errorMsg={error?.message}
            />
          )}
        />
        <button
          style={{
            backgroundColor: COLORS.milkChocolate,
            border: 'none',
            color: 'white',
            padding: '15px',
            borderRadius: '4px',
            marginTop: '20px',
          }}
          type="submit"
        >
          Create Account
        </button>
      </form>
    </RegisterLayoutContainer>
  );
}

export default Register;
