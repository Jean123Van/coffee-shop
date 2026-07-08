import { Outlet } from 'react-router-dom';
import logo from '../../assets/coffee.png';

function NavBar() {
    return (
        <main
            style={{
                minHeight: '100vh',
            }}
        >
            <header
                style={{
                    backgroundColor: 'white',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    display: 'flex',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                    justifyContent: 'center',
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
                        <button
                            style={{
                                backgroundColor: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                padding: '7px 10px 7px 10px',
                                color: 'black',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                            }}
                        >
                            Log in
                        </button>
                        <button
                            style={{
                                backgroundColor: 'black',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                padding: '7px 10px 7px 10px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                            }}
                        >
                            Sign up
                        </button>
                    </div>
                </div>
            </header>

            <section>
                <Outlet />
            </section>
        </main>
    );
}

export default NavBar;
