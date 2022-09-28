import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className='bg-warning d-flex p-3'>
            <div>
                <img src="./logo.png" alt="" style={{ height: "100px" }} />
            </div> 
            <div>        
            <h1 className='fw-bold'>GYM WorkOut</h1>
            </div> 
        </div>
    );
};

export default Header;