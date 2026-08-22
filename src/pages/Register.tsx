import TextInput from '../components/Inputs/TextInput/TextInput';
import RegisterLayoutContainer from '../components/Register/RegisterLayoutContainer';
import { COLORS } from '../theme/colors';

function Register() {
    function onSubmitHandler(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <RegisterLayoutContainer type={'register'}>
            <form
                onSubmit={onSubmitHandler}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    width: '100%',
                }}
            >
                <TextInput
                    label="First name"
                    placeholder="Enter your first name"
                />
                <TextInput
                    label="Last name"
                    placeholder="Enter your last name"
                />
                <TextInput
                    label="Email"
                    placeholder="Enter your email"
                    type={'email'}
                />
                <TextInput
                    label="Password"
                    placeholder="Create a password"
                    type={'password'}
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
                >
                    Create Account
                </button>
            </form>
        </RegisterLayoutContainer>
    );
}

export default Register;
