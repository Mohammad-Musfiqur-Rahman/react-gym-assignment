import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from '../Product/Product';
import Sidebar from '../Sidebar/Sidebar';

const Main = () => {
    return (
        <div className='bg-info'>
            <div className="row container">

                <div className="col-10">
                    <Product></Product>
                </div>
                <div className="col-2">
                    <Sidebar></Sidebar>
                </div>           
            
            </div>
        </div>
    );
};

export default Main;