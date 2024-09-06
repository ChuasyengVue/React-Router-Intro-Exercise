import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBack = () => {
    const navigate = useNavigate();

    const handleGoHome =() => {
        navigate('/');
    };

    return(
        <button onClick={handleGoHome}>
            GO BACK
        </button>
    );
}

export default GoBack;
