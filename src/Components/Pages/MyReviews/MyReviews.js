import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import temp from './../../../Images/photoAvatar.png'
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../Shared/TitleHook/useTitle';


const MyReviews = () => {
    const { user } = useContext(authContext)
    const [myReviews, setMyReviews] = useState([])
    useTitle(`MyReviews | Black Diamond Photography`)


    useEffect(() => {
        fetch(`https://black-diamond-photography-server.vercel.app/myReviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setMyReviews(data)
                console.log(data)

            })
    }, [user?.email])



    const handleDelete = (id) => {
        fetch(`https://black-diamond-photography-server.vercel.app/deleteReview/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const find = myReviews.find(find => find._id === id)
                    const filter = myReviews.filter(filter => filter._id !== id)
                    const newReviews = [...filter, find]
                    setMyReviews(newReviews)
                    toast.success('Successfully Deleted!');
                }
                console.log(data)
            })
            .catch(err => console.error(err))

    }

    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-10'>My Reviews</h1>
            <div className='container mx-auto text-center  mt-5 py-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    myReviews.length === 0 ? <h1 className='font-bold text-4xl text-center left-[39%] absolute'>Review not found..!</h1> : <>
                        {
                            myReviews.map(review => {
                                return (

                                    <div key={review._id} className='bg-gray-700 p-4 rounded-lg mb-3 md:mb-0 relative'>
                                        <div className='flex flex-col items-center mx-auto text-center justify-self-center justify-center'>
                                            <div >
                                                <img className='w-16 h-16 object-cover rounded-full ring-2 ring-offset-2 inline-block' src={temp} alt="" />
                                                <div className='absolute left-2 top-5'>
                                                    <Link to={`/editReviews/${review._id}`} className='bg-green-600 text-white px-5 rounded-xl mr-2'>Edit</Link>
                                                    <button onClick={() => handleDelete(review._id)} className='bg-red-600 text-white px-5 rounded-xl'>Delete</button>
                                                </div>
                                            </div>
                                            <div className='ml-2'>
                                                <h3 className='text-lg font-medium text-gray-300'>{review.name}</h3>
                                                <h3 className='text-gray-300'>Rating: {review.rating}</h3>
                                            </div>
                                        </div>
                                        <Toaster />

                                        <div className='mt-3'>
                                            <h1 className='bg-gray-200 inline-block text-gray-700 font-medium  px-5 rounded-full'>{review.service}</h1>
                                            <p className='text-gray-200 px-1 pb-5'>{review.textarea}</p>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </>
                }
            </div>
        </div>
    );
};

export default MyReviews;

