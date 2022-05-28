import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen items-center justify-center flex'>
            <div className="flex items-center justify-center ">
                <div className="w-48 h-48 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
            </div>

        </div>
    );
};

export default Loading;