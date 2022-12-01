import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
// services css is in the HomeServices
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import useTitle from '../../Shared/TitleHook/useTitle';
// ..
AOS.init();

const Services = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    useTitle(`Services | Black Diamond Photography`)


    useEffect(() => {
        fetch('https://black-diamond-photography-server.vercel.app/Services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [])



    return (
        <div id={loading && 'loading'} className='mt-20'>
            <h4 className='font-bold text-gray-300 text-6xl uppercase text-center'>Our Services</h4>
            <h2 className='font-bold uppercase text-xl tracking-[.45rem] text-red-500 mb-8 pl-2 relative top-[-13px] text-center'>Click Your Happiness</h2>
            <div className='container mx-auto flex justify-around mt-10 mb-10 h-services'>
                {
                    services.map(serviceCard => {
                        const { _id, img, Price, Rating, service, details } = serviceCard;
                        return (
                            <div data-aos="fade-up" key={_id} className="service mb-5">
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
                                <Link to={`/service/${_id}`} type="button" className="  text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Details</Link>
                                <Link to={`/reviews/${_id}`} type="button" className="  text-white bg-gradient-to-br from-sky-500 to-blue-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Reviews</Link>
                            </div>
                        )
                    })
                }
            </div>
            <Footer />

        </div>
    );
};

export default Services;