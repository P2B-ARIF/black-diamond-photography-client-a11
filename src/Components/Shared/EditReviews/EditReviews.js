import React from 'react';
import { useLoaderData } from 'react-router-dom';
import temp from './../../../Images/photoAvatar.png'
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../TitleHook/useTitle';


const EditReviews = () => {
    const editReview = useLoaderData()
    const { _id, name, rating, textarea, service } = editReview
    console.log(editReview);
    useTitle(`Edit Review | Black Diamond Photography`)


    const handleEdit = (e) => {
        e.preventDefault()

        const text = document.getElementById('editText').value;

        fetch(`https://black-diamond-photography-server.vercel.app/editReview/${editReview._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text })
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Successfully Edited Review!');

                console.log(data)
            })
    }

    return (

        <div key={_id} className='bg-gray-300 w-5/6 md:w-2/4 lg:w-1/3 mx-auto p-4 rounded-lg mb-3 md:mb-0 relative mt-40'>
            <div className='flex flex-col items-center mx-auto text-center justify-self-center justify-center'>
                <div >
                    <img className='w-16 h-16 object-cover rounded-full ring-2 ring-offset-2 inline-block' src={temp} alt="" />

                </div>
                <div className='ml-2'>
                    <h3 className='text-lg font-medium text-gray-700'>{name}</h3>
                    <h3 className='text-gray-700'>Rating: {rating}</h3>
                </div>
            </div>

            <div className='mt-3'>
                <h1 className='bg-gray-700 inline-block text-gray-300 font-medium  px-5 rounded-full'>{service}</h1>
                <textarea id='editText' className='text-gray-700 px-1 pb-5 w-full mt-2 border-2'>{textarea}</textarea>
            </div>
            <Toaster />

            <button onClick={handleEdit} className='px-5 bg-green-500 rounded-full text-white py-1'>Edit Review</button>
        </div>

    );
};

export default EditReviews;