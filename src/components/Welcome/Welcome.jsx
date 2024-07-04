import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

function Welcome() {
    return (
        <>
            <Navbar />
            <center>
                <div class="flex justify-center items-center mt-10">
                    <div class="bg-white rounded-lg p-6">
                        <div class="p-4">
                            <div class="max-w-sm bg-white border-gray-100 rounded-lg dark:bg-gray-800 ">
                                <a href="#">
                                    <img class="rounded-t-lg" src="https://images.theconversation.com/files/122137/original/image-20160511-18171-kulas4.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip" alt="" />
                                </a>
                                <div class="p-2">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-left">Welcome to Truily</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Odio eveniet ut recusandae omnis,culpa ullam voluptatibus harum quia mollitia non a, explicabo ea magni numquam
                                        sed expedita ducimus totam cum!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Odio eveniet ut recusandae omnis,culpa ullam voluptatibus harum quia mollitia non a, explicabo ea magni numquam
                                        sed expedita ducimus totam 
                                    </p>

                                </div>
                            </div>

                            <button type="button" class="text-white mt-2 bg-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-10 mb-2 w-96" style={{ padding: "4% 20% 3% 44%" }}>
                                Agree
                            </button>
                        </div>
                    </div>
                </div>


            </center>
        </>
    )
}

export default Welcome