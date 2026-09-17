import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../../assets/coffee.png';
import BrownOutlinedBtn from '../Buttons/BrownOutlinedBtn';
import LoggedOutActionItems from './LoggedOutActionItems';
import ProfileDropDown from './ProfileDropDown';

function NavBar() {
    const navigate = useNavigate();

    const isLoggedIn = !!localStorage.getItem('token');

    return (
        <>
            <header
                style={{
                    backgroundColor: 'white',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    display: 'flex',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                    justifyContent: 'center',
                    position: 'sticky',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        maxWidth: '1100px',
                    }}
                >
                    <button
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '5px',
                            border: 'none',
                            backgroundColor: 'transparent',
                            padding: '0',
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        <img
                            src={logo}
                            width={30}
                            height={30}
                            alt="CoffeeNote logo"
                        />
                        <span
                            style={{
                                fontWeight: 'bold',
                                color: 'black',
                                paddingTop: '5px',
                                fontSize: '16px',
                            }}
                        >
                            CoffeeNote
                        </span>
                    </button>
                    <div>
                        <button
                            onClick={() => {
                                navigate('/');
                            }}
                            style={{
                                border: 'none',
                                backgroundColor: 'transparent',
                                fontWeight: 'bold',
                                color: 'black',
                                height: '60px',
                                borderBottom: `2px solid black`,
                                cursor: 'pointer',
                            }}
                        >
                            Discover
                        </button>
                    </div>

                    {isLoggedIn ? (
                        <div className="flex flex-row items-center">
                            <BrownOutlinedBtn>
                                Contribute a Cafe
                            </BrownOutlinedBtn>
                            <div className="bg-brown h-[35px] w-[35px] flex justify-center items-center rounded-[100%] mr-[5px]!">
                                <span className="text-[white]">JV</span>
                            </div>
                            <ProfileDropDown />
                        </div>
                    ) : (
                        <LoggedOutActionItems />
                    )}
                </div>
            </header>

            <main
                style={{
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        maxWidth: '1100px',
                        paddingTop: '20px',
                        paddingBottom: '20px',
                    }}
                >
                    <Outlet />
                </div>
            </main>
        </>
    );
}

export default NavBar;
