import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = ({route}) => {
    const {name, path, font} = route;
    return (
        <li className='mr-11 ml-7 text-2xl m-2 mt-10 flex'>
            <div>
            <p className='text-white w-8 mr-5'>{font}</p>
            </div>
            <Link to={path}>{name}</Link>
        </li>
    );
};

export default Nav;