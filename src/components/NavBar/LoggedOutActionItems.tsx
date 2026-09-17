import { useNavigate } from 'react-router-dom';
import PrimaryBtn from '../Buttons/PrimaryBtn/PrimaryBtn';

function LoggedOutActionItems() {
    const navigate = useNavigate();

    return (
        <section className="flex flex-row gap-[2px]">
            <PrimaryBtn
                variant={'light'}
                onClick={() => {
                    navigate('/login');
                }}
            >
                Log in
            </PrimaryBtn>
            <PrimaryBtn
                onClick={() => {
                    navigate('/register');
                }}
            >
                Sign up
            </PrimaryBtn>
        </section>
    );
}

export default LoggedOutActionItems;
