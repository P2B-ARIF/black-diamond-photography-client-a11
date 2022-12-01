import React, { useEffect, useState } from 'react';
import './HomeServices.css'
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const HomeServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://black-diamond-photography-server.vercel.app/homeServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mt-20 ' >
            <h4 className='font-bold text-gray-300 text-6xl uppercase text-center'>Our Services</h4>
            <h2 className='font-bold uppercase text-lg md:text-xl tracking-widest md:tracking-[1rem] text-red-500 mb-8 pl-2 relative top-[-13px] text-center'>Click Your Happiness</h2>
            <div className='container mx-auto flex justify-around mt-10 mb-10 h-services'>
                {
                    services.map(serviceCard => {

                        const { _id, img, Price, Rating, service, details } = serviceCard;

                        return (
                            <div data-aos="fade-up" key={_id} className="service">
                                <div className='s-img'>
                                    <PhotoProvider>
                                        <PhotoView src={img}>
                                            <img src={img} alt="" />
                                        </PhotoView>
                                    </PhotoProvider>
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {service}
                                </h3>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {details.length > 100 ? details.slice(0, 100) + "..." : details}
                                </p>

                                <h5 className='mt-5'>Rating: {Rating}</h5>
                                <h4 className='mb-5'>Price: {Price}</h4>
                                <Link to={`/service/${_id}`} type="button" className="  text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Details</Link>
                                <Link to={`/reviews/${_id}`} type="button" className="  text-white bg-gradient-to-br from-sky-500 to-blue-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Reviews</Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className='text-center'>
                <Link to='/services' className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-semibold rounded-lg text-sm px-10 py-2.5 mr-2 mb-2 ">SEE ALL</Link>
            </div>

        </div>
    );
};

export default HomeServices;