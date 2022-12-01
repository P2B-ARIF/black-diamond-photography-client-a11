import React from 'react';
import { useState } from 'react';
// import img from './../../../Images/man-2.jpg'
import './AddService.css'
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../Shared/TitleHook/useTitle';

const AddService = () => {
    const [img, setImg] = useState('')
    const [rating, setRating] = useState('')
    useTitle(`Add Service | Black Diamond Photography`)


    const handleAddService = (e) => {
        e.preventDefault()

        const name = e.target.sName.value;
        const price = e.target.sPrice.value;
        const image = e.target.sImg.value;
        const textarea = e.target.textarea.value;

        console.log(img)
        const addService = {
            service: name,
            Price: price,
            Rating: rating,
            img: image,
            details: textarea,
            date: new Date()
        }

        fetch('https://black-diamond-photography-server.vercel.app/addService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Successfully created!');
                console.log(data)
            })
            .catch(err => console.error(err))


    }
    return (
        <div className='addService'>
            <div className='service-card'>
                <div className='service-form'>
                    <h1 className='text-2xl font-medium text-center mb-5'>Add your Service</h1>
                    <form className='form' onSubmit={handleAddService}>
                        <input className='input' type="text" name='sName' placeholder='Enter service name' required />
                        <input className='input' type="number" name='sPrice' placeholder='Enter service price' required />
                        <input className='input' onClick={(e) => setImg(e.target.value)} type="text" name='sImg' placeholder='Enter service img url' />
                        <select className='select' onClick={(e) => setRating(e.target.value)} name="" id="" required >
                            <option value="select option">Select Rating</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="4.5">4.5</option>
                            <option value="5">5</option>
                        </select>
                        <textarea name="textarea" id="textarea" placeholder='Write service details...' required></textarea>
                        <div className='flex justify-center mt-2'>
                            <button className='btn-as' type='submit'>ADD SERVICE</button>
                        </div>
                        <Toaster />

                    </form>
                </div>
                <div className='preview-img'>
                    <h1 className='text-xl font-medium'>
                        Preview Image
                    </h1>
                    <div className='pre-image'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;
