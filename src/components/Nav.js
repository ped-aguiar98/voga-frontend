import { useState } from 'react';
import { Link} from 'react-router-dom';
import logo from '../images/logo-voga-dark.jpg';
import MobileNav from './MobileNav';

import React from 'react'

const Nav = ({children}) => {

    const [active, setActive] = useState(false);

    const showMenu = () => {
      setActive(!active);
    }

  return (

    <nav class="p-5 bg-white shadow-md md:flex md:items-center md:justify-between">
      <div class="flex justify-between items-center">
        <Link to="/home" class="flex items-center cursor-pointer hover:opacity-80 duration-500">
          <img src={logo} class="h-10 inline rounded-full mx-2" alt="Voga Logo" />
          <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Voga Investments</span>
        </Link>

        <button onClick={showMenu} data-collapse-toggle="navbar-default" type="button" class=" mr-7 inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
           <span class="sr-only">Open main menu</span>
           <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
         </button>
        
      </div>

      <ul className="hidden md:flex md:items-center">
        {children}
      </ul>

      
      <MobileNav showMenu={showMenu} active={active}>
        {children}
      </MobileNav>
      

    </nav>
  )
}

export default Nav
