import React from 'react';
import { Link } from 'react-router-dom';

const UsersNav = () => {
    const usersName =[
        {id: "jpus2301", name: 'Hamza', path:'/hamza'},
        {id: "jpus2302", name: 'Manoj', path:'/manoj'},
        {id: "jpus2303", name: 'Hasan', path:'/hasan'},
        {id: "jpus2304", name: 'Apan', path:'/apan'},
        {id: "jpus2305", name: 'Waqur', path:'/waqar'},
        {id: "jpus2306", name: 'Khan', path:'/khan'},
    ]
    return (
        <div>
            <Link to={usersName.path}>{usersName.name}</Link>
        </div>
    );
};

export default UsersNav;