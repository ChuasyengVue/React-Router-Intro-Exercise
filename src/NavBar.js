import React from 'react';
import {Link} from 'react-router-dom';

function NavBar () {

    return(
        <nav>
            <Link to="/chocolate"> Chocolate </Link>
            <Link to="/coffee"> Coffee </Link>
            <Link to='/chips'> Chips </Link>
        </nav>   
    );
}
export default NavBar;