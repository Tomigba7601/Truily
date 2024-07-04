import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import "../Emailverification/Emailverification.css"

function Emailverification() {
    return (
        <>
            <Navbar />
            <center>
                <div class="flex justify-center items-center h-screen">
                    <div class="bg-white rounded-lg p-6">
                        <div class="p-4">
                            <h1 class=" font-bold mb-2 text-3xl">My Email is</h1>
                            <p class="text-gray-600 mb-4 text-1xl w-35">We want to keep you updated on matches, notifications and more</p>
                            <div className="email-container">
                                <input type="email" id="email-input" className='mt-10' name="email" placeholder="Enter your email" required />
                            </div>
                            <Link to="/Name">
                                <button type="button" class="text-white mt-10 bg-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2" style={{ padding: "2% 20% 2% 20%" }}>
                                    Continue
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}

export default Emailverification