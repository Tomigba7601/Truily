import React from 'react'
import Navbar from '../Navbar/Navbar'
import "../Name/Name.css"
import { Link } from 'react-router-dom'

function Name() {
  return (
    <>
   <Navbar/>
    <center>
    <div class="flex justify-center items-center h-screen">
                    <div class="bg-white rounded-lg p-6">
                        <div class="p-4">
                            <h1 class=" font-bold mb-2 text-3xl">I'm Known as</h1>
                            <div className="email-container">
                                <input type="email" id="email-input" className='mt-10' name="email" placeholder="First Name" required />
                            </div>
                            <p>This is how it will show up in Truily and this cannot be edited later</p>
                          <Link to="/age">
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

export default Name