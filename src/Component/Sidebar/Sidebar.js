import React from 'react';

const Sidebar = () => {
    return (
        <div classNameName='bg-secondary'>
            <h1>Side bar</h1>
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

        </div>
    );
};

export default Sidebar;