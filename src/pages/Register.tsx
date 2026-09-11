import TextInput from '../components/Inputs/TextInput/TextInput';
import RegisterLayoutContainer from '../components/Register/RegisterLayoutContainer';
import { COLORS } from '../theme/colors';
import { useForm, Controller } from 'react-hook-form';
import { registerSchema, type RegisterInput } from '@/schemas/register.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '@/api/authentication';
import { useState } from 'react';
import RegisterSuccess from '@/components/Register/RegisterSuccess';
import CoffeeLoadingAnimation from '@/components/Loading/CoffeeLoading';

function Register() {
    const [isRegSuccess, setIsRegSuccess] = useState<boolean | null>(null);

    const { mutate, isPending } = useMutation({
        mutationFn: registerUser,
        onSuccess: () => setIsRegSuccess(true),
        onError: () => setIsRegSuccess(false),
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

    if (isRegSuccess) {
        return <RegisterSuccess />;
    }

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
                {isRegSuccess === false && (
                    <span className="text-red-500 text-[13px] border text-center rounded-[5px] p-[5px]">
                        Something went wrong. Please try again.
                    </span>
                )}
                {isPending ? (
                    <div
                        style={{
                            margin: 'auto',

                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '5px',
                        }}
                    >
                        <CoffeeLoadingAnimation />
                        <span
                            style={{
                                paddingTop: '10px',
                            }}
                        >
                            Brewing...
                        </span>
                    </div>
                ) : (
                    <button
                        style={{
                            backgroundColor: COLORS.milkChocolate,
                            border: 'none',
                            color: 'white',
                            padding: '15px',
                            borderRadius: '4px',
                        }}
                        type="submit"
                    >
                        Create Account
                    </button>
                )}
            </form>
        </RegisterLayoutContainer>
    );
}

export default Register;
