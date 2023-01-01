import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow flex md:items-center items-center justify-center md:justify-between md:p-6 w-full fixed bottom-0">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <Link to="/" className="hover:underline">
          PokemonApp™
        </Link>
        . All Rights Reserved.
      </span>
    
    </footer>
  );
}

export default Footer
