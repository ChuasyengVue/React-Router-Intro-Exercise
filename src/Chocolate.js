import React from 'react';
import GoBack from './GoBack';

function Chocolate() {
    return(
        <div>
            <h1>Chocolate with little nut</h1>
            <img 
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTdtZ2dxa3I2dmpieTRqOWFhd3Vzd3VkcmJ3OHRjOG00bWd0em5kbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zhk0TtgTZtGo0/giphy.webp" 
            alt='Milk chocolate is the best'/>
            <div>
                <GoBack/>
            </div>
        </div>
    );
}

export default Chocolate;