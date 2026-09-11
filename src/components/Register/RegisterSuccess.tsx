import { COLORS } from '@/theme/colors';
import PrimaryBtn from '../Buttons/PrimaryBtn/PrimaryBtn';
import { useNavigate } from 'react-router-dom';
import CenterAuthBrownLayout from '../Containers/CenteredAuthBrownLayout/CenterAuthBrownLayout';

function RegisterSuccess() {
    const navigate = useNavigate();

    return (
        <CenterAuthBrownLayout>
            <div
                style={{
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <h2
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Registration successful!
                </h2>
                <h5
                    style={{
                        textAlign: 'center',
                        marginBottom: '20px',
                    }}
                >
                    Proceed to login page to signin.
                </h5>
                <PrimaryBtn
                    style={{
                        padding: '10px 15px 10px 15px',
                        backgroundColor: COLORS.brown,
                    }}
                    onClick={() => navigate('/login')}
                >
                    Login
                </PrimaryBtn>
            </div>
        </CenterAuthBrownLayout>
    );
}

export default RegisterSuccess;
