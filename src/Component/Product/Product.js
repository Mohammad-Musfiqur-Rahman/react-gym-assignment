import React from 'react';

const Product = (props) => {
    // console.log(props)
    const {img, title, about, mints} = props.product
    const {secBtn} = props
    return (
        <div className='container'>

            {/* <div className="row row-cols-1 row-cols-md-3 g-4"> */}

            <div className="col mb-3">
                <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> {title} </h5>
                    <p className="card-text">{about.slice(0, 150)}</p>
                </div>
                <small className="text-muted fs-5">Time required:{mints}s</small>

                <div className="card-footer">
                    <button onClick={ () => secBtn(props.product.mints) } type="button" class="btn btn-success">Add to list</button>
                </div>
                </div>
            </div>
            
           
            {/* </div> */}
        </div>
    );
};

export default Product;