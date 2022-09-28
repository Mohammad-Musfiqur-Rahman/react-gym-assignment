import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Sidebar = () => {
    return (
        <div>
            <h1>Side Bar</h1>
            <hr />
            {/* my-info */}
            <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src="my.JPG" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Mohammad Musfiqur Rahman</h5>
                    <p className="card-text"><small className="text-muted">Chattogram, BD</small></p>                    
                </div>
                </div>
            </div>
            </div>
            {/* select time */}
            <select className="form-select" multiple aria-label="multiple select example">
                <option selected className='fw-bold fs-4' >Add A Break</option>
                <option value="1">10s</option>
                <option value="2">20s</option>
                <option value="3">30s</option>
                <option value="4">40s</option>
            </select>
           
        </div>
    );
};

export default Sidebar;