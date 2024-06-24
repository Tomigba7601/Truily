import React from 'react'
import "../Navbar/Navbar.css"
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav className='shadow-lg'>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo"><Link to="/" className='font-extrabold text-4xl'>Truily</Link></label>
      <ul>
        <li><a class="active"><Link to="/signup">The App</Link></a></li>
        <li><a href="#" >Ambassadors</a></li>
        <li><a href="#" >Events</a></li>
        <li><a href="#" >The buzz</a></li>
        <li><a href="#" >About</a></li>
        <div>
          <a href="#" title="" class="text-base font-medium text-primary-700 underline-none hover:no-underline dark:text-primary-500 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 font-bold text-2xl">Login </a>
          <a href="#" title="" class="text-base font-medium text-primary-700 underline-none hover:no-underline dark:text-primary-500 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 font-bold text-2xl"> Sign Up</a>
        </div>
      </ul>

    </nav>
  )
}

export default Navbar