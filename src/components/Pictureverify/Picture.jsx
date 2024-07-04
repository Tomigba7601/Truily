import React from 'react'
import Navbar from '../Navbar/Navbar'
import "../Age/Age.css"
import { Link } from 'react-router-dom'

function Picture() {
    return (
        <>
            <Navbar />
            <center>
                <div class="flex justify-center items-center h-screen" style={{marginTop:"10%"}}>
                    <div class="bg-white rounded-lg p-6">
                        <div class="p-4">
                            <h1 class=" font-bold mb-2 text-3xl">Show us your smile!</h1>
                            <p >Upload two or more images to showcase yourself</p>


                            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-7'>
                                <div class="flex justify-center items-center">
                                    <div class="bg-white shadow-md rounded-lg p-1 w-40 max-w-md">
                                        <div class="flex justify-center items-center w-full">
                                            <label for="dropzone-file" class="flex flex-col justify-center items-center w-30 h-30 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                                    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input id="dropzone-file" type="file" class="hidden" />
                                            </label>
                                        </div>

                                    </div>
                                </div>
                                <div class="flex justify-center items-center">
                                    <div class="bg-white shadow-md rounded-lg p-1 w-40 max-w-md">
                                        <div class="flex justify-center items-center w-full">
                                            <label for="dropzone-file" class="flex flex-col justify-center items-center w-30 h-30 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                                    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input id="dropzone-file" type="file" class="hidden" />
                                            </label>
                                        </div>

                                    </div>
                                </div>
                                <div class="flex justify-center items-center">
                                    <div class="bg-white shadow-md rounded-lg p-1 w-40 max-w-md">
                                        <div class="flex justify-center items-center w-full">
                                            <label for="dropzone-file" class="flex flex-col justify-center items-center w-30 h-30 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                                    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input id="dropzone-file" type="file" class="hidden" />
                                            </label>
                                        </div>

                                    </div>
                                </div>
                                <div class="flex justify-center items-center">
                                    <div class="bg-white shadow-md rounded-lg p-1 w-40 max-w-md">
                                        <div class="flex justify-center items-center w-full">
                                            <label for="dropzone-file" class="flex flex-col justify-center items-center w-30 h-30 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                                    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input id="dropzone-file" type="file" class="hidden" />
                                            </label>
                                        </div>

                                    </div>
                                </div>
                                <div class="flex justify-center items-center">
                                    <div class="bg-white shadow-md rounded-lg p-1 w-40 max-w-md">
                                        <div class="flex justify-center items-center w-full">
                                            <label for="dropzone-file" class="flex flex-col justify-center items-center w-30 h-30 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                                    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input id="dropzone-file" type="file" class="hidden" />
                                            </label>
                                        </div>

                                    </div>
                                </div>
                                <div class="flex justify-center items-center">
                                    <div class="bg-white shadow-md rounded-lg p-1 w-40 max-w-md">
                                        <div class="flex justify-center items-center w-full">
                                            <label for="dropzone-file" class="flex flex-col justify-center items-center w-30 h-30 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                                    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input id="dropzone-file" type="file" class="hidden" />
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='text-left mt-5'>
                            <h3>Photo Guidelines</h3>
                            <p>Get a nice head shot... and say cheese!</p>
                            <p>Put on a happy face and smile</p>
                            <p>Dont overshare</p>
                            <p>It's best to be alone</p>
                            </div>

                          <Link to="/bio">
                          <button type="button" class="text-white bg-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2 w-96" style={{ padding: "2% 20% 2% 32%", marginTop: "10%" }}>
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

export default Picture