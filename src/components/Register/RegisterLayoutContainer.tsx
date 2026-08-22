import { COLORS } from '../../theme/colors';
import logo from '../../assets/coffee.png';
import { Link } from 'react-router-dom';

const LayoutType = {
    SIGNIN: 'signin',
    REGISTER: 'register',
} as const;

type LayoutType = (typeof LayoutType)[keyof typeof LayoutType];

interface RegisterLayoutContainerProps {
    type: LayoutType;
    children?: React.ReactNode;
}

function RegisterLayoutContainer({
    type,
    children,
}: RegisterLayoutContainerProps) {
    const values =
        type === 'register'
            ? {
                  title: 'Create your account',
                  smallNote: 'Already have an account?',
                  redirectText: 'Sign In',
                  redirectLink: '/login',
              }
            : {
                  title: 'Login to your account',
                  smallNote: "Don't have an account yet?",
                  redirectText: 'Sign Up',
                  redirectLink: '/register',
              };

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
                        textAlign: 'center',
                    }}
                >
                    {values.title}
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
                {children}
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
                    {values.smallNote}{' '}
                    <Link
                        to={values.redirectLink}
                        style={{
                            fontWeight: 'bold',
                            color: COLORS.milkChocolate,
                            textDecoration: 'none',
                        }}
                    >
                        {values.redirectText}
                    </Link>
                </span>
            </div>
        </main>
    );
}

export default RegisterLayoutContainer;
