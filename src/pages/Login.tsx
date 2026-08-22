import TextInput from '../components/Inputs/TextInput/TextInput';
import RegisterLayoutContainer from '../components/Register/RegisterLayoutContainer';
import { COLORS } from '../theme/colors';

function Login() {
    function onSubmitHandler(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <RegisterLayoutContainer type={'signin'}>
            <form
                onSubmit={onSubmitHandler}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    width: '100%',
                }}
            >
                <TextInput label="Email" placeholder="Email" type={'email'} />
                <TextInput
                    label="Password"
                    placeholder="Password"
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
                    Login
                </button>
            </form>
        </RegisterLayoutContainer>
    );
}

export default Login;
