import React from 'react';
import useTitle from '../../Shared/TitleHook/useTitle';

const Blog = () => {
    useTitle(`Blog | Black Diamond Photography`)

    return (
        <div className='container mx-auto my-10'>
            <div className='mx-3 md:w-3/4 md:mx-auto border-blue-500 border-2 p-5 rounded-lg'>
                <h3 className='border-b-2 border-blue-400 font-medium inline-block'>1. Difference between SQL and NoSQL                    ?</h3>
                <p className=''><strong>Answer: </strong> SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <br />
            <div className='mx-3 md:w-3/4 md:mx-auto border-blue-500 border-2 p-5 rounded-lg'>
                <h3 className='border-b-2 border-blue-400 font-medium inline-block'>2. What is JWT, and how does it work?                </h3>
                <p><strong >Answer: </strong> JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
            </div>
            <br />
            <div className='mx-3 md:w-3/4 md:mx-auto border-blue-500 border-2 p-5 rounded-lg'>
                <h3 className='border-b-2 border-blue-400 font-medium inline-block'>3. What is the difference between javascript and NodeJS?                </h3>
                <p><strong>Answer: </strong> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <br />
            <div className='mx-3 md:w-3/4 md:mx-auto border-blue-500 border-2 p-5 rounded-lg'>
                <h3 className='border-b-2 border-blue-400 font-medium inline-block'>4. How does NodeJS handle multiple requests at the same time?                </h3>
                <p><strong>Answer: </strong> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blog;