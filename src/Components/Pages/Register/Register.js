import React, { useState } from 'react';
import img from './../../../Images/p-img1.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Register.css'
import { Button } from 'flowbite-react';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../Shared/TitleHook/useTitle';

const Register = () => {
    const { userCreateId, loginGoogle, userUpdate } = useContext(authContext)
    const [checked, setChecked] = useState(false);
    const provider = new GoogleAuthProvider()
    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [active, setActive] = useState(false)
    useTitle(`Register | Black Diamond Photography`)




    const from = location.state?.from?.pathname || '/';
    const handleGoogleLogin = (e) => {
        e.preventDefault()

        loginGoogle(provider)
            .then((result) => {
                const user = result.user
                console.log(user);

                fetch('https://black-diamond-photography-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({ email: user.email })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('token', data.token)
                        navigate(from, { replace: true })
                    })

            })
            .catch(err => console.error(err));
    }

    const handleRegister = (e) => {
        e.preventDefault()
        setError('')
        setActive(true)

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(name, email, password, checked);

        userCreateId(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                handleUpdateProfile(name)
                setActive(false)
                e.target.reset()

            })
            .catch(err => {
                console.log(err)
                setError(err.message)
                setActive(false)
            })

        const handleUpdateProfile = (name) => {
            const profile = {
                displayName: name
            }
            userUpdate(profile)
                .then(result => {
                    const user = result.user
                    console.log(user);
                })
                .catch(err => {
                    console.log(err)

                })

        }

    }


    return (
        <div className='register'>
            <div className='reg-card'>
                <form onSubmit={handleRegister} className='form'>
                    <h1>#Register</h1>
                    <div className='input-group'>
                        <input type="text" name='name' placeholder='Enter your name' />
                        <input type="email" name='email' placeholder='Enter your email' />
                        <input type="password" name='password' placeholder='Enter your password' />

                    </div>
                    <p className='font-bold text-red-500'><small>{error}</small></p>

                    <small>
                        <input onClick={() => setChecked(!checked)} className='checkbox' type="checkbox" name="checkbox" />
                        you are agree our<Link to='/terms' className='text-blue-500 ml-2'> Terms of Service</Link>
                    </small>
                    {
                        checked ? <Button type='submit' className='w-full mt-5' gradientMonochrome="pink">
                            Register
                        </Button> : <Button disabled type='submit' className='w-full mt-5' gradientMonochrome="pink">
                            Register
                        </Button>
                    }
                    <p className='flex text-sm justify-end mt-2'>
                        Already have an account?
                        <Link to='/login' className='text-blue-500'> Login here</Link>
                    </p>
                    <div className='btn-head'>
                        <button onClick={handleGoogleLogin} className='btn'>
                            <FaGoogle className='icon' />Sign in Google
                        </button>

                    </div>
                </form>
                <div id={active && 'reg-img'} className='reg-img' >
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;