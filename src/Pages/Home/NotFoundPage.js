import React from 'react';
import notfound from '../../image/notfound.jpg'

const NotFoundPage = () => {
    return (
        <div>
              <img className='w-100' src={notfound} alt="" />
        </div>
    );
};

export default NotFoundPage;