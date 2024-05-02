import React from 'react';
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";


const Footer = () => {
  return (
    <footer className="bg-orange-700 py-2 sticky bottom-0 w-full">
      <div className="container mx-auto text-center text-white">
        <p>&copy; 2024 | copyright uzmausmani@gmail.com | All rights reserved.</p>
        <p className="mt-2">Made with <FaReact className="inline-block text-red-500" /> React and <SiTailwindcss className="inline-block text-blue-500" /> Tailwind CSS</p>
       
      </div>

    </footer>
  );
}

export default Footer;
