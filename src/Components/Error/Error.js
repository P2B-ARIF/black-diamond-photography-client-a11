import React from 'react';
import { Link } from 'react-router-dom';
import animateImg from './../../Images/juicy-teamwork.gif'
import './Error.css'

const Error = () => {
    return (
        <div className='error'>
            <div className="img-body">
                <img src={animateImg} alt="" />
            </div>
            <div className='err-right '>
                <h1 className='text-3xl font-bold'>Oops,
                    nothing here...
                </h1>
                <p className='w-1/2'>Uh oh, we can't seem to find the page you're looking for. Try going back to previous page or Contact us for more information.</p>
                <Link className='err-btn' to='/'>Go Home</Link>
            </div>
        </div>
    );
};

export default Error;