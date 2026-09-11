import TextInput from '../components/Inputs/TextInput/TextInput';
import RegisterLayoutContainer from '../components/Register/RegisterLayoutContainer';
import { useForm, Controller } from 'react-hook-form';
import { registerSchema, type RegisterInput } from '@/schemas/register.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '@/api/authentication';
import RegisterSuccess from '@/components/Register/RegisterSuccess';
import CenterAuthBrownLayout from '@/components/Containers/CenteredAuthBrownLayout/CenterAuthBrownLayout';
import ErrorModal from '@/components/Containers/ErrorModal';
import LoadingModal from '@/components/Loading/LoadingModal';
import BrownBtn from '@/components/Buttons/BrownBtn';

function Register() {
    const { mutate, isPending, isSuccess, isError } = useMutation({
        mutationFn: registerUser,
    });

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
        mutate(registerInput);
    };

    return (
        <CenterAuthBrownLayout>
            {isSuccess ? (
                <RegisterSuccess />
            ) : (
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
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            }) => (
                                <TextInput
                                    label="First name"
                                    placeholder="Enter your first name"
                                    onChange={onChange}
                                    value={value}
                                    errorMsg={error?.message}
                                    disabled={isPending}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="lastName"
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            }) => (
                                <TextInput
                                    label="Last name"
                                    placeholder="Enter your last name"
                                    onChange={onChange}
                                    value={value}
                                    errorMsg={error?.message}
                                    disabled={isPending}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="email"
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            }) => (
                                <TextInput
                                    label="Email"
                                    placeholder="Enter your email"
                                    type={'email'}
                                    onChange={onChange}
                                    value={value}
                                    errorMsg={error?.message}
                                    disabled={isPending}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="password"
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            }) => (
                                <TextInput
                                    label="Password"
                                    placeholder="Create a password"
                                    type={'password'}
                                    onChange={onChange}
                                    value={value}
                                    errorMsg={error?.message}
                                    className="mb-[20px]!"
                                />
                            )}
                        />
                        {isError && <ErrorModal />}
                        {isPending ? (
                            <LoadingModal />
                        ) : (
                            <BrownBtn type="submit">Create Account</BrownBtn>
                        )}
                    </form>
                </RegisterLayoutContainer>
            )}
        </CenterAuthBrownLayout>
    );
}

export default Register;
