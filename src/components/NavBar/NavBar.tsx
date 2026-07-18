import { Outlet } from 'react-router-dom';
import logo from '../../assets/coffee.png';
import PrimaryBtn from '../Buttons/PrimaryBtn/PrimaryBtn';

function NavBar() {
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
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '5px',
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
                            }}
                        >
                            CoffeeNote
                        </span>
                    </div>
                    <div>
                        <button
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

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '2px',
                        }}
                    >
                        <PrimaryBtn variant={'light'}>Log in</PrimaryBtn>
                        <PrimaryBtn>Sign up</PrimaryBtn>
                    </div>
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
