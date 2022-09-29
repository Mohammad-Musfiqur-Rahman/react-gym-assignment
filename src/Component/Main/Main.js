import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from '../Product/Product';
import Sidebar from '../Sidebar/Sidebar';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [secondTime, setSecond] = useState([]);

    const secBtn = (sec) => {
        // console.log(sec)
        const newSec = [...secondTime, sec] 
        setSecond(newSec);
    }

    useEffect( () => {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            // console.log(data)
        })
    }, []);

    return (
       
        <div className='bg-secondary'>
            <div className="row container mx-auto ">

                <div className="col-lg-9 col-sm-12">
                    <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                    {
                        products.map(product => <Product 
                            product={product}
                            key={product.id}
                            secBtn={secBtn}
                            ></Product> )
                    }
                    </div>
                </div>

                <div className="col-lg-3 col-sm-12 bg-warning">
                    <Sidebar secondTime={secondTime}></Sidebar>
                </div>           
            
            </div>
        </div>
    );
};

export default Main;