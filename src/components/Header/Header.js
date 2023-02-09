import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import { Bars3Icon, ChevronLeftIcon, HomeIcon, UsersIcon, InformationCircleIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/', font: <HomeIcon /> },
        { id: 2, name: 'Users', path: '/users', font: <UsersIcon /> },
        { id: 3, name: 'About', path: '/about', font: <InformationCircleIcon /> },

    ]

    return (
        <nav className=' bg-slate-800 h-24'>

            <div className='flex space-x-96'>

                <div onClick={() => setOpen(!open)} className='h-14 w-14 pt-2 text-white bg-slate-800'>
                    {
                        open ? <ChevronLeftIcon /> : <Bars3Icon />
                    }
                </div>
                <div >
                    <p className='ml-72 text-white text-4xl pt-2 font-bold mt-3'>ADMIN PRIVILEGE PANEL</p>
                </div>


            </div>

            <ul className={`absolute md:absolute h-full text-left bg-slate-800 text-white  duration-500 ease-in ${open ? 'left-0' : 'left-[-190px]'}`}>

                {
                    routes.map(route => <Nav
                        key={route.id}
                        route={route}
                    ></Nav>)
                }

            </ul>
        </nav>
    );
};

export default Header;