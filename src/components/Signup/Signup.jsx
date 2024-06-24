import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');
    const [agreement, setAgreement] = useState(false);

    const handleSignUp = () => {
        // Add your sign-up logic here
        console.log('Signing up with:', email, country, password);
    };

    return (
        <>
        <Navbar/>
        <div className="max-w-md mx-auto p-6 mt-6 bg-white shadow-lg rounded-md">
            <div className='grid grid-cols-2 gap-2'>
                <button className="bg-blue-500 text-white px-3 py-2 rounded-md mb-2 block text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg px-2 py-2.5 text-center ">Sign up with Google</button>
                <button className="bg-blue-700 text-white px-4 py-2 rounded-md mb-2 block text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg px-5 py-2.5 text-center ">Sign up with Apple</button>
            </div>

            <form onSubmit={handleSignUp}>
                <label className="block mb-1">Your name:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.values)}
                    className="w-full px-3 py-2 border rounded-md mb-2"
                />
                <label className="block mb-1">Your email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md mb-2"
                />
                <label className="block mb-1">Country:</label>
                <select value={country} onChange={(e) => setCountry(e.target.value)} className="w-full px-3 py-2 border rounded-md mb-2">
                    <option value="">Choose a country</option>
                    <option value="country1">Country 1</option>
                    <option value="country2">Country 2</option>
                    {/* Add more country options as needed */}
                </select>
                <label className="block mb-1">Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md mb-2"
                />
                <label className="block mb-2">
                    <input
                        type="checkbox"
                        checked={agreement}
                        onChange={() => setAgreement(!agreement)}
                        className="mr-2"
                    />
                    By signing up, you agree to Flowbite's Terms of Use and Privacy Policy
                </label>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg px-5 py-2.5 text-center ">Create an account</button>
            </form>
        </div>
        </>
    );
};

export default SignUpForm;
