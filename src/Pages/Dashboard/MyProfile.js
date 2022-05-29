import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (

        <div>
            <h2>My Profile</h2>
            <div class="card card-side bg-base-100 shadow-xl">

                <figure> <img src={user.photoURL} alt="photo" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{user.displayName}</h2>
                    <h2 class="card-title">Email:{user.email}</h2>


                </div>
            </div>
        </div>
    );
};

export default MyProfile;