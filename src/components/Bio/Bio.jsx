import React from 'react'
import Navbar from '../Navbar/Navbar'
import "../Bio/Bio.css"
import { Link } from 'react-router-dom'

function Bio() {
    return (
        <>
            <Navbar />
            <center>
                <div class="flex justify-center items-center h-screen">
                    <div class="bg-white rounded-lg p-6">
                        <div class="p-4">
                            <h1 class=" font-bold mb-2 text-3xl">Bio</h1>
                            <p class="text-gray-600 mb-4 text-1xl w-35">Write something about you to display on your profile</p>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type here"></textarea>
                          <Link to="/welcome">
                          <button type="button" class="text-white mt-10 bg-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2 w-96" style={{ padding: "2% 20% 2% 42%" }}>
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

export default Bio