import React from 'react';
import {NavLink} from 'react-router-dom';
const FormSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="form-success">
                <h1 className="form-success-title">We have received your request!</h1>
                <NavLink className="discover-link" to="/">Click to start discovering new recipes...</NavLink>
            </div>
        </div>
    )
}

export default FormSuccess;