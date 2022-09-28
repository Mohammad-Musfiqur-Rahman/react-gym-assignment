import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from '../Product/Product';
import Sidebar from '../Sidebar/Sidebar';

const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            // console.log(data)
        })
    }, []);

    return (
       
        <div className='bg-info'>
            <div className="row container">

                <div className="col-10">
                    {
                        products.map(product => <Product product={product}></Product> )
                    }
                    
                </div>
                <div className="col-2">
                    <Sidebar></Sidebar>
                </div>           
            
            </div>
        </div>
    );
};

export default Main;