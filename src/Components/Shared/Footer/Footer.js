import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-gray-800 text-gray-200 py-14'>
            <div className='container mx-auto footer'>
                <div className='f-sec'>
                    <h1>BLACK DIAMOND PHOTOGRAPHY</h1>
                    <p>We will spend a slot capturing you both naturally and a few posey ways. Just you both being yourselves as well as styled traditional portraits. Defiantly we will lock your preference before the event, no worry I got you.</p>
                </div>
                <div className='s-sec'>
                    <h1>Get Notified</h1>
                    <h3>DO YOU WANT YOUR WEDDING TO BE REMEMBERED?</h3>
                    <div className='subscribe'>
                        <input type="text" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className='t-sec'>
                    <h1>Follow Us</h1>
                    <p>Let use be social</p>
                    <div>
                        <FaFacebook />
                        <FaInstagram />
                        <FaGithub />
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
            <p className='text-center mt-5'>Copyright © 2022 Black Diamond Photography. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;