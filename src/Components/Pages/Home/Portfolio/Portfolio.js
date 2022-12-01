import React from 'react';
import img1 from './../../../../Images/p-img1.jpg'
import img2 from './../../../../Images/p-img2.jpg'
import img3 from './../../../../Images/p-img3.jpg'
import img4 from './../../../../Images/p-img4.jpg'
import img5 from './../../../../Images/p-img5.jpg'
import img6 from './../../../../Images/p-img6.jpg'
import './Portfolio.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Portfolio = () => {
    return (
        <div className='container pt-10 mx-auto text-center '>
            <h4 className='font-bold text-gray-300 text-4xl md:text-6xl uppercase'>Our Portfolio</h4>
            <h2 className='font-bold uppercase text-lg md:text-xl tracking-widest md:tracking-[1rem] text-red-500 mb-8 pl-5 relative top-[-13px]'>Check Our Work</h2>
            <div className='portfolio'>
                <div className='p-left'>
                    <img data-aos="fade-right" className='mt-5' src={img1} alt="" />
                    <img data-aos="fade-right" src={img2} alt="" />
                </div>
                <div className='p-right'>
                    <img data-aos="fade-left" src={img3} alt="" />
                    <img data-aos="fade-left" src={img4} alt="" />
                    <img data-aos="fade-left" src={img5} alt="" />
                    <img data-aos="fade-left" src={img6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;