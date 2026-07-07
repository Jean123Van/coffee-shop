import logo from '../assets/coffee.png';
import TextInput from '../components/Inputs/TextInput/TextInput';
import { COLORS } from '../theme/colors';

function Register() {
    function onSubmitHandler(e) {
        e.preventDefault();
    }

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '30px',
                paddingBottom: '30px',
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
                    width: '100%',
                    maxWidth: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
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
            </form>
        </div>
    );
}

export default Register;
