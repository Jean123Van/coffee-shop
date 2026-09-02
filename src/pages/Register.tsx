import TextInput from '../components/Inputs/TextInput/TextInput';
import RegisterLayoutContainer from '../components/Register/RegisterLayoutContainer';
import { COLORS } from '../theme/colors';
import { useForm, Controller } from 'react-hook-form';
import type { RegisterInput } from '@/types/register';

function Register() {
  const { control, handleSubmit } = useForm<RegisterInput>({
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
          render={({ field }) => (
            <TextInput
              label="First name"
              placeholder="Enter your first name"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <TextInput
              label="Last name"
              placeholder="Enter your last name"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextInput
              label="Email"
              placeholder="Enter your email"
              type={'email'}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextInput
              label="Password"
              placeholder="Create a password"
              type={'password'}
              {...field}
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
