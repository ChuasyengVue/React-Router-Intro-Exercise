import React from 'react';
import GoBack from './GoBack';

function Chips() {

    return(
        <div>
            <h1>Best way to eat Chips</h1>
            <img 
            src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXVnc3piN2YydXp1MjI4d3RodDFibW5kb3NrajU2MWN0bTAzMXd1YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fwm8zYfwv8iKA/giphy.webp'
            alt='Variety Chips'>
            </img>
            <div>
                <GoBack/>
            </div>
        </div>
    );
}

export default Chips;