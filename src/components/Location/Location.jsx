import React from 'react'
import Navbar from '../Navbar/Navbar'
import "../Location/Location.css"
import { Link } from 'react-router-dom'

function Location() {
    return (
        <>
            <Navbar />
            <center>
                <div class="flex justify-center items-center h-screen">
                    <div class="bg-white rounded-lg p-6">
                        <div class="p-4">
                            <h1 class=" font-bold mb-2 text-3xl">Set your location</h1>
                            <p class="text-gray-600 mb-4 text-1xl w-35">Help us find your perfect match! Please add your location</p>
                            <div className="email-container">
                                <input type="email" id="email-input" className='mt-10' name="email" placeholder="Type your home address" required />
                            </div>
                            <button className='text-orange-500 mt-7'>Use Location Service</button>
                            <br />
                            <button className='text-orange-500' style={{marginTop:"30%"}}>Verify</button>
                            <br />
                            <button type="button" class="text-white mt-10 bg-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2" style={{ padding: "2% 20% 2% 20%" }}>
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}

export default Location