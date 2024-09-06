import React from 'react';
import GoBack from './GoBack';

function Coffee() {
    return(
        <div>
            <h1>Coffee made with LOVE!!</h1>
            <img 
            src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnB1MWtvcGFrYXJ0Z3o5eG5pOXBpODY0Mzc1MGN2aXAyMmdjdmF6bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/apgAY1JKpR82MS0out/giphy.webp'
            alt='Coffee for you'></img>
            <div>
                <GoBack/>
            </div>
        </div>
    );
}

export default Coffee;