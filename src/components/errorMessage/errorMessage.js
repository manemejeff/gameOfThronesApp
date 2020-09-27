import React from 'react';
import './errorMessage.css';
import error from './error.jpg';

const ErrorMessage = () => {
    return (
        <>
            <img src={error} alt='error'></img>
            <span>Something goes wrong</span>
        </>
    )
}

export default ErrorMessage;