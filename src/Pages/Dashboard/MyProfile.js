import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (

        <div>
            <h2>My Profile</h2>
            <div class="card card-side bg-base-100 shadow-xl">

                {/* <figure> <img src={user.photoURL} alt="photo" /></figure> */}
                <div className="avatar p-2">
                    <div className="w-24 square-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={user.photoURL} alt="photo" />
                    </div>
                </div>
                <div class="card-body">
                    <h2 class="card-title uppercase">{user.displayName}</h2>
                    <h2 class="card-title">Email:{user.email}</h2>
                </div>
            </div>
            <div>
                <h1 className='text-red-600 text-5xl'>Warning: For Testing Purpose Only</h1>
                <h2>Admin Credentials</h2>
                <br />
                <p className='text-primary-600 text-2xl'>Admin Email :   iamhasan9501@gmail.com</p>
                <p className='text-red-600 text-2xl'>Admin Password :  admin1</p>
            </div>
        </div>
    );
};

export default MyProfile;