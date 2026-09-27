import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useQueryClient } from '@tanstack/react-query';

function ProfileDropDown() {
    const queryClient = useQueryClient();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <button
            className="relative"
            onClick={() => {
                setIsOpen((prev) => !prev);
            }}
        >
            <FaChevronDown className="text-brown cursor-pointer" />
            {isOpen && (
                <section className="border-2 border-brown rounded-lg bg-[white] w-[120px] top-[30px] left-[-100px] absolute overflow-hidden py-[10px]">
                    <button
                        className="py-[5px] hover:bg-lightGray w-full cursor-pointer"
                        onClick={(event) => {
                            event.stopPropagation();

                            localStorage.removeItem('token');
                            queryClient.setQueryData(['me'], null);
                        }}
                    >
                        Logout
                    </button>
                </section>
            )}
        </button>
    );
}

export default ProfileDropDown;
