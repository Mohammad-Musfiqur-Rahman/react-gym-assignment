import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getLocalItmes = () => {
    let time = localStorage.getItem('time')
    console.log(time)
    if(time){
        return JSON.parse(localStorage.getItem('time'));
    }
    else{
        return ''
    }
}

const Sidebar = ({secondTime}) => {

    const [breakTime, SetBreakTime] = useState(getLocalItmes());
    useEffect( () => {
        localStorage.setItem('time', JSON.stringify(breakTime))
    }, [breakTime])

    const notify = () => toast('Well done')
   
    // console.log(secondTime)
    const initialValue = 0;
    const sumWithInitial = secondTime.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
    );
    // console.log(sumWithInitial);    
    
    return (
        <div>
            <hr />
            <h1>Information</h1>
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
            <select className="form-select" multiple aria-label="multiple select example" onChange={(e) => {
                const selectSec = e.target.value;
                SetBreakTime(selectSec)
            }}>
                <option selected className='fw-bold fs-4' >Add A Break</option>
                <option value="10s">10s</option>
                <option value="20s">20s</option>
                <option value="30s">30s</option>
                <option value="40s">40s</option>
            </select>
            {/* display time */}            
            <div className="card my-3">
                <div className="card-header">
                <h3>Exercise Details</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li className="list-group-item">Exercise time <span className='fw-bolder text-success fs-5'>{sumWithInitial}</span>s </li>
                    <li className="list-group-item">Break time: <span className='fw-bolder text-danger fs-5'> {breakTime}</span></li>
                </ul>
            </div>
            {/* toast btn */}            
            <button onClick={notify} type="button" className="btn btn-primary p-3 fw-bolder">Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Sidebar;