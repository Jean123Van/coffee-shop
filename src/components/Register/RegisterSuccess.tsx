import { COLORS } from '@/theme/colors';
import PrimaryBtn from '../Buttons/PrimaryBtn/PrimaryBtn';
import { useNavigate } from 'react-router-dom';

function RegisterSuccess() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: COLORS.brown,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
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
    </div>
  );
}

export default RegisterSuccess;
