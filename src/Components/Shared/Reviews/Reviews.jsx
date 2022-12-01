import React, { useContext } from 'react';
import './Reviews.css'
import temp from './../../../Images/man-2.jpg'
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../TitleHook/useTitle';

const Reviews = () => {
    const reviews = useLoaderData()
    const [rating, setRating] = useState(0)
    const { user } = useContext(authContext)
    const [allReviews, setAllReviews] = useState([])
    useTitle(`Reviews | Black Diamond Photography`)


    const { img, service } = reviews;

    const handleReview = e => {
        e.preventDefault()


        const name = e.target.name.value;
        const number = e.target.number.value;
        const email = e.target.email.value;
        const textarea = e.target.textarea.value;

        const reviewUser = {
            name: name,
            number: number,
            email: email,
            rating: rating,
            service: service,
            server_id: reviews._id,
            textarea: textarea,
        }
        console.log(reviewUser);
        fetch(`https://black-diamond-photography-server.vercel.app/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    console.log('first')
                    const newReviews = [reviewUser, ...allReviews]
                    setAllReviews(newReviews)
                    toast.success('Successfully review added!');
                }
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        fetch('https://black-diamond-photography-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])


    return (
        <div>
            <div id={!user?.email && 'review-before'} className='review-head container mx-auto p-5 mt-10  bg-rose-300 '>
                <div className='review-img'>
                    <img className='object-top' src={img} alt="" />

                </div>
                <div >
                    <h1 className='text-2xl font-medium mb-5'>{service}</h1>
                    <form onSubmit={handleReview}>
                        <div className=' form-review grid grid-cols-1 lg:grid-cols-2 lg:gap-5'>
                            <input className='input' type="text" name='name' placeholder='Enter your name' required />
                            <input className='input' type="number" name='number' placeholder='Enter your number' />
                            <input className='input' type="email" name='email' value={user?.email} readOnly />
                            <select onChange={(e) => setRating(e.target.value)} className='select-rating'>
                                <option className='option' value="select">Select Rating</option>
                                <option className='option' value="3">3</option>
                                <option className='option' value="4">4</option>
                                <option className='option' value="4.5">4.5</option>
                                <option className='option' value="5">5</option>
                            </select>
                        </div>
                        <textarea className='textarea' placeholder='Write your opinion...' name="textarea" id="" cols="" rows=""></textarea>
                        <button type='submit' className='btn-review mt-5 w-full text-white bg-red-500 py-2 hover:bg-red-'>ADD REVIEWS</button>
                        <Toaster />
                    </form>
                </div>
            </div>
            {/* lg:grid lg:grid-cols-2 lg:gap-x-5 */}


            <div className='container mx-auto text-center  mt-5 py-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    allReviews.map(review => {
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
        </div>
    );
};

export default Reviews;