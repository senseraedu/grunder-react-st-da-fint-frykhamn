import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleBookNow = () => {
       navigate('/bookings');
    };

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Städa Fint</h1>
           
            <button data-testid="nav-button" onClick={handleBookNow} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Boka Städning
            </button>
        </div>
    );
};

export default LandingPage;