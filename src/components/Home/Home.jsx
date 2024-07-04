import React from 'react'
import Navbar from "../Navbar/Navbar"
import Footer from '../Footer/Footer'
import "../Home/Home.css"

function Home() {
    return (
        <div>
            <Navbar />
            <div className="landing-img">
                <center style={{ paddingTop: "18%" }}>
                    <div style={{ marginBottom: "10%" }}>
                        <h1 className='text-white text-5xl' >Find your perfect partner</h1>
                        <p className='text-white mt-3'>Aimed at singles looking for relationship</p>
                    </div>
                    <button type="button" class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                        <i class="fa-brands fa-apple mb-5 w-4 h-4 me-4 ms-1 text-gray-900 text-3xl "></i>
                        App Store
                    </button>
                    <button type="button" class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                        <i class="fa-brands fa-google-play mb-3 w-4 h-4 me-4 -ms-1 text-gray-900 text-2xl "></i>
                        Goggle Play
                    </button>

                </center>
                {/* w-4 h-4 me-2 -ms-1 text-[#626890] */}
            </div>
        </div >
    )
}

export default Home