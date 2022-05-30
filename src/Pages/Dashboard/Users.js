import React from 'react';
import { useQuery } from 'react-query';

const Users = () => {
    const { data: users } = useQuery('users', () => fetch(`http://localhost:5000/user`).then(res => res.json()));
    return (
        <div>
            <h2 className='text-1xl text-primary'>Total User :{users.length}</h2>
        </div>
    );
};

export default Users;