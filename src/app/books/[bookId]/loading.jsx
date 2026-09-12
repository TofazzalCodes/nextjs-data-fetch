import React from 'react';

const BookDetailsLoading = () => {
    return (
        <div className='flex justify-center items-center '>
             <h2>Loading book Details.....</h2>
             <span className="loading loading-spinner text-error"></span>
        </div>
    );
};

export default BookDetailsLoading;