import React, { useContext, useState } from 'react';
import './Login.css'
import img from './../../../Images/p-img5.jpg'
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { authContext } from '../../AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../Shared/TitleHook/useTitle';

const Login = () => {
    const { loginGoogle, userSignId } = useContext(authContext);
    const [active, setActive] = useState(false)
    const [error, setError] = useState('')
    const provider = new GoogleAuthProvider()
    const navigate = useNavigate()
    const location = useLocation()
    useTitle(`Login | Black Diamond Photography`)


    let from = location.state?.from?.pathname || "/";

    const handleSignIn = (e) => {
        e.preventDefault()
        setActive(true)
        setError('')
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);
        userSignId(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                e.target.reset()

                fetch('https://black-diamond-photography-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: user.email })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('token', data.token)
                        setActive(false)

                        navigate(from, { replace: true });
                    })

            })
            .catch(err => {
                setActive(false)
                console.log(err, "Error Login")
                setError(err.message)

            })
    }
    const handleGoogleLogin = (e) => {
        e.preventDefault()

        loginGoogle(provider)
            .then(result => {
                const user = result.user
                console.log(user)
                fetch('https://black-diamond-photography-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: user.email })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('token', data.token)
                        navigate(from, { replace: true });
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='login'>
            <div className='login-card'>
                <div id={active && 'login-img'} className='login-img' >
                    <img src={img} alt="" />
                </div>
                <form onSubmit={handleSignIn} className='form'>
                    <h1>#Login</h1>
                    <div className='input-group'>
                        <input type="email" name='email' placeholder='Enter your email' />
                        <input type="password" name='password' placeholder='Enter your password' />

                    </div>
                    <p className='font-bold text-red-500'><small>{error}</small></p>
                    <Button type='submit' className='w-full mt-5' gradientMonochrome="failure">
                        Login
                    </Button>
                    <p className='flex text-sm justify-end mt-2'>
                        Create an account?
                        <Link to='/register' className='text-blue-500'> Register</Link>
                    </p>
                    <div className='btn-head'>
                        <button onClick={handleGoogleLogin} className='btn'>
                            <FaGoogle className='icon' />Login Google
                        </button>

                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;