import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../../assets/coffee.png';
import BrownOutlinedBtn from '../Buttons/BrownOutlinedBtn';
import LoggedOutActionItems from './LoggedOutActionItems';
import ProfileDropDown from './ProfileDropDown';
import { useQuery } from '@tanstack/react-query';
import { getMe } from '@/api/user';
import NavbarProfileSkeleton from '../Loading/NavbarProfileSkeleton';
import { useEffect } from 'react';
import type { AxiosError } from 'axios';

function NavBar() {
    const navigate = useNavigate();

    const { data, isLoading, error } = useQuery({
        queryKey: ['me'],
        queryFn: getMe,
        enabled: !!localStorage.getItem('token'),
        staleTime: Infinity,
    });

    useEffect(() => {
        if ((error as AxiosError)?.response?.status === 401) {
            localStorage.removeItem('token');
        }
    }, [error]);

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

                    {isLoading && <NavbarProfileSkeleton />}

                    {!isLoading && data && (
                        <div className="flex flex-row items-center">
                            <BrownOutlinedBtn
                                onClick={() => navigate('/contribute-cafe')}
                            >
                                Contribute a Cafe
                            </BrownOutlinedBtn>
                            <div className="bg-brown h-[35px] w-[35px] flex justify-center items-center rounded-[100%] mr-[5px]!">
                                <span className="text-[white]">
                                    {data.firstName[0].toLocaleUpperCase() +
                                        data.lastName[0].toLocaleUpperCase()}
                                </span>
                            </div>
                            <ProfileDropDown />
                        </div>
                    )}

                    {!isLoading && !data && <LoggedOutActionItems />}
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
