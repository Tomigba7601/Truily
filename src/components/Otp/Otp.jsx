import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'


function Otp() {
    return (
        <>
            <Navbar />
            <center>
                <div class="flex justify-center items-center h-screen">
                    <div class="bg-white rounded-lg p-6">
                        <div class="p-4">
                            <h1 class=" font-bold mb-2 text-3xl">Please Enter 4 Digit Code</h1>
                            <p class="text-gray-600 mb-4 text-1xl">We sent a a- digit Code to at <br /> (97) 12345686 <button className='text-orange-500'>Edit</button></p>
                            <div class="flex justify-center space-x-2 mb-4 mt-10">
                                <input type="text" class="w-12 h-12 text-center text-2xl font-bold border border-gray-300 rounded-md" maxlength="1" />
                                <input type="text" class="w-12 h-12 text-center text-2xl font-bold border border-gray-300 rounded-md" maxlength="1" />
                                <input type="text" class="w-12 h-12 text-center text-2xl font-bold border border-gray-300 rounded-md" maxlength="1" />
                                <input type="text" class="w-12 h-12 text-center text-2xl font-bold border border-gray-300 rounded-md" maxlength="1" />
                            </div>
                            <p class="">
                                Didn't Recieve OTP? <button className='text-orange-500'> Send Again</button>
                            </p>
                           <Link to="/emailverify">
                           <button type="button" class="text-white mt-10 bg-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2" style={{ padding: "4% 20% 3% 20%" }}>
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

export default Otp