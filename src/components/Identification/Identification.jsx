import React from 'react'
import Navbar from '../Navbar/Navbar'
import "../Identification/Identification.css"
function Identification() {
    return (
        <>
            <Navbar />
            <center>
                <div class="flex justify-center items-center h-screen">
                    <div class="bg-white rounded-lg p-6">
                        <div class="p-4">
                            <h1 class=" font-bold mb-2 text-3xl">I celebrate my birthday On</h1>
                            <p>Your age will be part of public profile</p>
                            <div className="email-container" style={{marginTop:"20%"}} >
                                <input type="email" id="email-input" className='mt-10' name="email" placeholder="MM" required />
                                <input type="email" id="email-input" className='mt-10' name="email" placeholder="DD" required />
                                <input type="email" id="email-input" className='mt-10' name="email" placeholder="YYYY" required />
                            </div>
                            <button type="button" class="text-white bg-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2" style={{ padding: "2% 20% 2% 20%", marginTop:"10%" }}>
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}

export default Identification