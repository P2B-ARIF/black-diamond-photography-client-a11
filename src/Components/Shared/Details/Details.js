import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { useLoaderData, Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import useTitle from '../TitleHook/useTitle';
import temp from './../../../Images/photoAvatar.png'

const Details = () => {
    const serviceDetails = useLoaderData()
    const { _id, Price, Rating, service, img, details } = serviceDetails;
    const [review, setReview] = useState([])
    useTitle(`Details | Black Diamond Photography`)


    useEffect(() => {
        fetch(`https://black-diamond-photography-server.vercel.app/review/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReview(data)
                console.log(data)
            })
        console.log('object');
    }, [_id])


    return (
        <div>
            <div className='container mx-auto grid md:grid-cols-2 p-5 mt-5 '>
                <div>
                    <img className='w-full' src={img} alt="" />
                </div>
                <div className='ml-5  my-5 md:my-0'>
                    <h1 className='text-3xl font-bold'>#{service}</h1>
                    <p className='my-5'>{details}</p>
                    <h4 className='text-lg font-medium'>Price: {Price}</h4>
                    <h4 className='text-lg font-medium flex items-center'>Rating: {Rating}
                        <FaStar className='ml-5 text-yellow-300' />
                        <FaStar className=' text-yellow-300' />
                        <FaStar className=' text-yellow-300' />
                        <FaStar className=' text-yellow-300' />
                        <FaStarHalf className=' text-yellow-300' />
                    </h4>
                    <br />
                    <Link className='bg-rose-400 text-gray-100 py-2 px-7' to='/services'>Go Back</Link>

                </div>
            </div>
            <div className='container mx-auto text-center  mt-5 py-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    review.map(review => {
                        return (
                            <div key={review._id} className='bg-gray-700 p-4 rounded-lg mb-3 md:mb-0'>
                                <div className='flex flex-col items-center mx-auto text-center justify-self-center justify-center'>
                                    <img className='w-16 h-16 object-cover rounded-full ring-2 ring-offset-2 inline-block' src={temp} alt="" />
                                    <div className='ml-2'>
                                        <h3 className='text-lg font-medium text-gray-300'>{review.name}</h3>
                                        <h3 className='text-gray-300'>Rating: {review.rating}</h3>
                                    </div>
                                </div>

                                <div className='mt-3'>
                                    <h1 className='bg-gray-200 inline-block text-gray-700 font-medium  px-5 rounded-full'>{review.service}</h1>
                                    <p className='text-gray-200 px-1 pb-5'>{review.textarea}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Footer />
        </div>
    );
};

export default Details;