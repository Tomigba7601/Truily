import React from 'react'
import Navbar from "../Navbar/Navbar"
import Footer from '../Footer/Footer'
import "../Home/Home.css"
import ai from "../../assets/ai.png"
import aii from "../../assets/aii.png"

function Home() {
    return (
        <div>
            <Navbar />
            <div className='w-full grid md:grid-cols-2 gap-2 p-2'>
                <div className='mt-10'>
                    <h1 className='font-bold text-5xl mt-3 p-3'>Unlimited Dating Scope</h1>
                    <p className='py-3' style={{ padding: "7% 0% 0% 5%" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est labore impedit eaque pariatur
                        porro aspernatur quae corporis commodi ipsam.
                    </p>


                    <div className='mt-8' style={{ marginLeft: "3%" }}>
                        <div class="bg-white p-6 rounded-lg shadow-md max-w-md">
                            <h2 class="text-lg font-semibold mb-4">Introduce Yourself</h2>
                            <div class="mb-4">
                                <label for="i-am" class="block text-sm font-medium text-gray-700">I am</label>
                                <select id="i-am" name="i-am" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option value="">.....</option>
                                    <option value="">Female</option>
                                    <option value="">Male</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <label for="looking-for" class="block text-sm font-medium text-gray-700">Looking for</label>
                                <select id="looking-for" name="looking-for" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option value="">.....</option>
                                    <option value="">Female</option>
                                    <option value="">Male</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" name="email" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <div class="mb-4">
                                <label for="city" class="block text-sm font-medium text-gray-700">Country</label>
                                <select id="Country" name="Country" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option value="">.....</option>
                                    <option value="">Nigeria</option>
                                    <option value="">India</option>
                                    <option value="">USA</option>
                                    <option value="">London</option>
                                    <option value="">Uganda</option>
                                    <option value="">Kenya</option>
                                    <option value="">Australia</option>
                                    <option value="">Dubai</option>
                                </select>
                            </div>
                            <a href="#" title="" class="text-base font-medium text-primary-700 underline-none hover:no-underline dark:text-primary-500 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 font-bold text-2xl">Get Started </a>

                        </div>

                    </div>
                </div>
                <div className='ms-8' style={{ marginLeft: "20%" }}>
                    <img class="rounded-full w-96 h-96" src={ai} alt="image description" />
                </div>
            </div>



            <div>
                <div>
                    <h1 className='mt-10 text-3xl text-center'>Our Features</h1>
                </div>
                <div className='w-full grid md:grid-cols-3 gap-3 p-8'>
                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex flex-col items-center pb-10">
                            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={ai} alt="Bonnie image" />
                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Discover</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                            <div class="flex mt-4 md:mt-6 p-3 text-center">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium placeat aperiam, alias distinctio cum et nemo voluptates non, nulla similique pariatur</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex flex-col items-center pb-10">
                            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={ai} alt="Bonnie image" />
                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Geo Location</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                            <div class="flex mt-4 md:mt-6 p-3 text-center">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium placeat aperiam, alias distinctio cum et nemo voluptates non, nulla similique pariatur</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex flex-col items-center pb-10">
                            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={ai} alt="Bonnie image" />
                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Private Chat</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                            <div class="flex mt-4 md:mt-6 p-3 text-center">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium placeat aperiam, alias distinctio cum et nemo voluptates non, nulla similique pariatur</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>






            <div className='w-full grid md:grid-cols-2 gap-2 p-2'>
                <div className='' style={{ marginLeft: "0%" }}>
                    <img class="rounded-full w-full h-96" src={aii} alt="image description" />
                </div>
                <div className='mt-10 p-5'>
                    <a href="#" title="" class="text-base font-medium text-primary-700 underline-none hover:no-underline dark:text-primary-500 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 font-bold text-2xl">How it works</a>
                    <h1 className='font-bold text-2xl mt-8'>Meet with new people</h1>
                    <p className='mt-7 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est labore impedit eaque pariatur
                        porro aspernatur quae corporis commodi ipsam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est labore impedit eaque pariatur
                        porro aspernatur quae corporis commodi ipsam.
                    </p>

                </div>
            </div>

            <div className='w-full grid md:grid-cols-2 gap-2 p-2'  style={{ marginTop: "10%" }}>
                <div className='mt-10 p-5'id='sec'>
                    <a href="#" title="" class="text-base font-medium text-primary-700 underline-none hover:no-underline dark:text-primary-500 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 font-bold text-2xl">How it works</a>
                    <h1 className='font-bold text-2xl mt-8'>March Loyal amazing people</h1>
                    <p className='mt-7 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est labore impedit eaque pariatur
                        porro aspernatur quae corporis commodi ipsam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est labore impedit eaque pariatur
                        porro aspernatur quae corporis commodi ipsam.
                    </p>
               <div className='mt-5'>
               <a href="#" title="" class="mt-5 text-base font-medium text-primary-700 underline-none hover:no-underline dark:text-primary-500 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg px-5 py-2.5 text-center  font-bold text-2xl" >Know More</a>
               </div>

                </div>
                <div className='' style={{ marginLeft: "15%" }}>
                    <img class="rounded-full w-96 h-96" src={ai} alt="image description" />
                </div>
            </div>








            <section class="bg-white dark:bg-gray-900 mt-10">
                <div class="py-8 px-4 mx-auto max-w-screen-xl md:py-16 md:px-6">
                    <div>
                        <h1 className='mt-10 mb-5 text-3xl text-center font-extrabold'>Our pricing</h1>
                        <p className='mt-4 mb-8 text-1xl text-center font-normal'>Select your perfect love plan</p>
                    </div>
                    <div class="space-y-4 lg:grid lg:grid-cols-3 :gap-3 xl:gap-10 lg:space-y-0">
                        <div class="p-6 mx-xl max-w-lg text-center text-gray-900  rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 bg-gray-800 text-white">
                            <h3 class="mb-4 text-2xl font-semibold">Casual</h3>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-3xl font-extrabold">$99</span>
                                <span class="text-gray-500 dark:text-gray-400">1/month</span>
                            </div>
                            <ul role="list" class="mb-8 space-y-4 text-left block">
                                <li class=" items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li class="block items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                            </ul>
                            <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
                        </div>

                        <div class="p-6 mx-xl max-w-lg text-center text-gray-900  rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 bg-gray-800 text-white">
                            <h3 class="mb-4 text-2xl font-semibold">Serious</h3>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-3xl font-extrabold">$99</span>
                                <span class="text-gray-500 dark:text-gray-400">6/month</span>
                            </div>
                            <ul role="list" class="mb-8 space-y-4 text-left block">
                                <li class=" items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li class="block items-center space-x-3">

                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                            </ul>
                            <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
                        </div>
                        <div class="p-6 mx-xl max-w-lg text-center text-gray-900  rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 bg-gray-800 text-white">
                            <h3 class="mb-4 text-2xl font-semibold">Committed</h3>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-3xl font-extrabold">$99</span>
                                <span class="text-gray-500 dark:text-gray-400">12/month</span>
                            </div>
                            <ul role="list" class="mb-8 space-y-4 text-left block">
                                <li class=" items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li class="block items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                            </ul>
                            <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
                        </div>
                    </div>
                </div>
            </section>







            <center className='mt-10 mb-10'>
                <div id="controls-carousel" class="relative max-w-xl bg-dark p-6" data-carousel="static">

                    <div class="relative h-80 overflow-hidden rounded-sm md:h-30">

                        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <center>
                                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={ai} alt="Bonnie image" />
                                <h1 className='font-bold text-2xl'>Clara John</h1>
                                <p className='mt-3'>Serious</p>

                                <div class="flex items-center pt-4 pb-4" style={{ marginLeft: "40%" }}>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>


                                <p className='text-dark w-80'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dolorum, a omnis velit voluptatem pariatur
                                    officiis odio ratione sapiente similique architecto perspiciatis voluptatibus.
                                    Quasi, minima. Quos dolore ea magni ipsa.
                                </p>
                            </center>
                        </div>

                        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <center>
                                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={ai} alt="Bonnie image" />
                                <h1 className='font-bold text-2xl'>Celidon wesley</h1>
                                <p className='mt-3'>Committed</p>

                                <div class="flex items-center pt-4 pb-4" style={{ marginLeft: "40%" }}>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>


                                <p className='text-dark w-80'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dolorum, a omnis velit voluptatem pariatur
                                    officiis odio ratione sapiente similique architecto perspiciatis voluptatibus.
                                    Quasi, minima. Quos dolore ea magni ipsa.
                                </p>
                            </center>
                        </div>
                        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <center>
                                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={ai} alt="Bonnie image" />
                                <h1 className='font-bold text-2xl'>Micheal Arch</h1>
                                <p className='mt-3'>Committed</p>

                                <div class="flex items-center pt-4 pb-4" style={{ marginLeft: "40%" }}>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>


                                <p className='text-dark w-80'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dolorum, a omnis velit voluptatem pariatur
                                    officiis odio ratione sapiente similique architecto perspiciatis voluptatibus.
                                    Quasi, minima. Quos dolore ea magni ipsa.
                                </p>
                            </center>
                        </div>
                    </div>

                    <button type="button" class="absolute  text-gray-800 top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-dark/70 dark:bg-gray-800/30 group-hover:bg-dark/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-dark dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="absolute top-0  end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-dark dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-dark dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>


            </center>

            <Footer />
        </div >
    )
}

export default Home