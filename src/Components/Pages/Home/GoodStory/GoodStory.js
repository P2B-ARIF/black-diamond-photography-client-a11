import React from 'react';
import img from './../../../../Images/p-img2.jpg'
import img1 from './../../../../Images/img1.jpg'
import img2 from './../../../../Images/img2.jpg'
import img3 from './../../../../Images/img3.jpg'
import './GoodStory.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const GoodStory = () => {
    return (
        <div className='story mb-10'>
            <h4 className='font-bold text-gray-300 text-4xl md:text-6xl uppercase text-center'>Photography</h4>
            <h2 className='font-bold uppercase text-sm md:text-xl tracking-widest md:tracking-[.6rem] text-red-500 mb-8 pl-2 relative top-[-13px] text-center'>Choose Your Package</h2>
            <div className='gs-head container mx-auto'>
                <div data-aos="fade-right" className='img-left border border-spacing-5'>
                    <div className='s-img'>
                        <img src={img} alt="" />
                    </div>
                    <h1 className='text-2xl font-bold my-3 px-3'>Man of action at Department of Television, Film and Photography, University of Dhaka.</h1>
                    <p className='px-3'>In 2019, he took a glamour photo lighting class as an expert Department of Television, Film and Photography, University of Dhaka.</p>
                </div>
                <div  className="short-story">
                    <div data-aos="fade-up" className='img-right border border-spacing-5'>
                        <img src={img2} alt="" />
                        <div className='mt-2 pl-3 md:pl-0'>
                            <h1 className='text-lg font-bold'>Best Wedding Photographer</h1>
                            <p>In 2001, Tuhin Hossain achieved the “Best Glamour Photographer. award from the Cultural Reporters Association of Bangladesh.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='img-right border border-spacing-5'>
                        <img src={img1} alt="" />
                        <div className='mt-2 pl-3 md:pl-0'>
                            <h1 className='text-lg font-bold'>Best Products Photographer</h1>
                            <p>In 2001, Tuhin Hossain achieved the “Best Glamour Photographer. award from the Cultural Reporters Association of Bangladesh.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='img-right border border-spacing-5'>
                        <img src={img3} alt="" />
                        <div className='mt-2 pl-3 md:pl-0'>
                            <h1 className='text-lg font-bold'>Best Event Photographer</h1>
                            <p>In 2001, Tuhin Hossain achieved the “Best Glamour Photographer. award from the Cultural Reporters Association of Bangladesh.</p>
                        </div>
                    </div>
                   

                </div>
            </div>
        </div>
    );
};

export default GoodStory;