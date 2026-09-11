import CenterAuthBrownLayout from '@/components/Containers/CenteredAuthBrownLayout/CenterAuthBrownLayout';
import TextInput from '../components/Inputs/TextInput/TextInput';
import RegisterLayoutContainer from '../components/Register/RegisterLayoutContainer';
import { Controller, useForm } from 'react-hook-form';
import { loginSchema, type LoginInput } from '@/schemas/login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '@/api/authentication';
import type { LoginResponse } from '@/types/login';
import { useNavigate } from 'react-router-dom';
import ErrorModal from '@/components/Containers/ErrorModal';
import { useState } from 'react';
import type { AxiosError } from 'axios';
import LoadingModal from '@/components/Loading/LoadingModal';
import BrownBtn from '@/components/Buttons/BrownBtn';

function Login() {
    const navigate = useNavigate();

    const [isInvalidCreds, setIsInvalidCreds] = useState(false);
    const [isUnexpectedError, setIsUnexpectedError] = useState(false);

    const { mutate, isPending } = useMutation({
        mutationFn: loginUser,
        onSuccess: (loginResponse: LoginResponse) => {
            localStorage.setItem('token', loginResponse.token);
            navigate('/');
        },
        onError: (error: AxiosError) => {
            if (error.response?.status === 401) {
                return setIsInvalidCreds(true);
            }
            setIsUnexpectedError(true);
        },
    });

    const { control, handleSubmit } = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    function onSubmitHandler(loginInput: LoginInput) {
        setIsInvalidCreds(false);
        setIsUnexpectedError(false);
        mutate(loginInput);
    }

    return (
        <CenterAuthBrownLayout>
            <RegisterLayoutContainer type={'signin'}>
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
                        name="email"
                        render={({
                            field: { onChange, value },
                            fieldState: { error },
                        }) => (
                            <TextInput
                                label="Email"
                                placeholder="Email"
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
                                placeholder="Password"
                                type={'password'}
                                onChange={onChange}
                                value={value}
                                errorMsg={error?.message}
                                disabled={isPending}
                                className="mb-[20px]!"
                            />
                        )}
                    />

                    {isUnexpectedError && <ErrorModal />}
                    {isInvalidCreds && (
                        <ErrorModal message="Email or password is incorrect. Please try again with valid credentials." />
                    )}
                    {isPending ? (
                        <LoadingModal />
                    ) : (
                        <BrownBtn type={'submit'}>Login</BrownBtn>
                    )}
                </form>
            </RegisterLayoutContainer>
        </CenterAuthBrownLayout>
    );
}

export default Login;
