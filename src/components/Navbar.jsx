import React from 'react';
//import { FaTasks } from "react-icons/fa";
import { GiCargoShip } from "react-icons/gi";
import {IoHome} from "react-icons/io5";
import {IoIosContacts} from "react-icons/io";
import {LiaIdCardSolid} from "react-icons/lia";
import {FcAbout} from "react-icons/fc";


const Navbar = () => {
  return (
    <nav className='flex justify-between sticky top-0 bg-orange-700 text-white p-3 '>
      <div className="logo text-2xl flex items-center"> {/* Wrap text and icon in a flex container */}
        <span className="mr-2 font-bold">Login & SignUp</span> {/* Add some margin between text and icon */}

        
            <GiCargoShip /> {/* Apply animation class */}
  

      </div>
      <ul className='flex gap-8 mx-9 '>
        <li className='cursor-pointer hover:font-bold transition-all'>
          <FcAbout />About
          </li>
        <li className='cursor-pointer hover:font-bold  transition-all  text-yellow'>
        <IoHome/> Home
          </li>
        <li className='cursor-pointer hover:font-bold  transition-all text-yellow'>
          <IoIosContacts/>Contacts
          </li>
      </ul>
    </nav>
  );
}

export default Navbar;
