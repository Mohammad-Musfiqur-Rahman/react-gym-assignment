import React from 'react';

const Product = (props) => {
    console.log(props.product)
    const {img, title, about, mints} = props.product
    return (
        <div className='container bg-primary'>

            {/* <div className="row row-cols-1 row-cols-md-3 g-4"> */}

            <div className="col">
                <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> {title} </h5>
                    <p className="card-text">{about.slice(0, 150)}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{mints}s</small>
                </div>
                </div>
            </div>
            
           
            {/* </div> */}
        </div>
    );
};

export default Product;