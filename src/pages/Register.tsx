import logo from '../assets/coffee.png';
import TextInput from '../components/Inputs/TextInput/TextInput';
import { COLORS } from '../theme/colors';
import { Link } from 'react-router-dom';

function Register() {
    function onSubmitHandler(e) {
        e.preventDefault();
    }

    return (
        <main
            style={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '30px',
                paddingBottom: '30px',
                backgroundColor: COLORS.brown,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    padding: '40px',
                    borderRadius: '10px',
                    width: '100%',
                    maxWidth: '400px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: COLORS.brown,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        width: '220px',
                        height: '220px',
                        borderRadius: '100%',
                    }}
                >
                    <img
                        src={logo}
                        width={120}
                        height={120}
                        alt="CoffeeNote logo"
                    />
                    <span
                        style={{
                            fontSize: '24px',
                            paddingTop: '7px',
                            fontWeight: 'bold',
                            color: COLORS.warmBrown,
                        }}
                    >
                        CoffeeNote
                    </span>
                </div>
                <h1
                    style={{
                        marginBottom: '10px',
                    }}
                >
                    Create your account
                </h1>
                <h4
                    style={{
                        fontWeight: 'normal',
                        fontSize: '14px',
                        color: 'grey',
                        marginBottom: '20px',
                    }}
                >
                    Start finding and reviewing cafes today.
                </h4>
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
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '5px',
                        marginTop: '10px',
                        marginBottom: '10px',
                        width: '100%',
                    }}
                >
                    <hr
                        style={{
                            flex: '1',
                            border: 'none',
                            borderTop: `1px solid ${COLORS.lightGray}`,
                        }}
                    />
                    <span
                        style={{
                            color: 'grey',
                            fontSize: '10px',
                        }}
                    >
                        OR
                    </span>
                    <hr
                        style={{
                            flex: '1',
                            border: 'none',
                            borderTop: `1px solid ${COLORS.lightGray}`,
                        }}
                    />
                </div>
                <span
                    style={{
                        fontSize: '12px',
                    }}
                >
                    Already have an account?{' '}
                    <Link
                        to={'/login'}
                        style={{
                            fontWeight: 'bold',
                            color: COLORS.milkChocolate,
                            textDecoration: 'none',
                        }}
                    >
                        Sign in
                    </Link>
                </span>
            </div>
        </main>
    );
}

export default Register;
