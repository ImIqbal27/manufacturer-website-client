import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://shrouded-lake-70100.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{email}</td>
            <td>
                {role == 'admin' ? <button class="btn btn-outline btn-secondary btn-xs">Already Admin</button>
                    : <button onClick={makeAdmin} class="btn btn-secondary btn-xs">Make Admin</button>}
            </td>
            <td><button class="btn btn-error  btn-xs">Delete User</button></td>
        </tr>
    );
};

export default UserRow;