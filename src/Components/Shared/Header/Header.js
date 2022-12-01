import React, { useContext, useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import avatar from './../../../Images/photoAvatar.png'
import {  FcSportsMode } from "react-icons/fc";
import './Header.css'


const Header = () => {
    const [open, setOpen] = useState(true)
    const { logOut, user } = useContext(authContext)
    const [screenSize, getDimension] = useState({
        width: window.innerWidth,
    });

    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((err) => {
                console.log(err)
            })
    }


    const setDimension = () => {
        getDimension({
            width: window.innerWidth,
        })
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        return (() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize])


    return (
        <nav className='nav'>
            <div className='header container mx-auto py-3 md:flex md:items-center   justify-between relative'>
                <div className='logo flex justify-between'>
                    <h3 className='text-md lg:text-lg font-bold'>BLACK-DIAMOND<br />PHOTOGRAPHY</h3>
                    <div onClick={() => { setOpen(!open) }} className=' flex items-center  md:hidden' >
                        <span className='font-bold pr-2'>MENU</span>
                        <FaBars />
                    </div>
                </div>

                <div className={`h-menu  flex ${open ? "top-[-280px] absolute " : " "} md:top-0 md:items-center md:relative mt-3 md:mt-0`}>
                    <Link to='/' >Home</Link>
                    <Link to='/services' >Services</Link>
                    <Link to='/blog' >Blog</Link>
                    {
                        user?.email ? <>
                            <Link to='/addService' >Add Service</Link>
                            <Link to='/myReviews' >My Review</Link>
                            <Link onClick={handleLogOut} className='flex' >
                                {screenSize.width > 1024 && 'Logout'}
                                {screenSize.width < 765 &&  'Logout' }
                                <FcSportsMode className='text-3xl'/>
                            </Link>

                        </> : <>
                            <Link to='/login' >Login</Link>
                            <Link to='/register' >Register</Link>

                        </>
                    }
                    {
                        user?.email ? <>
                            <div className='h-profile md:border-2 md:border-pink-400'>
                                {
                                    user?.photoURL ? <img className='img ring-2 ring-offset-2' src={user?.photoURL} alt="" /> : <img className='img ring-2 ring-offset-2' src={avatar} alt="" srcSet="" />
                                }
                                <h3 className='text-md font-semibold md:text-lg lg:text-xl mx-1 lg:mx-2'>{user?.displayName}</h3>
                            </div>
                        </> : ''
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;