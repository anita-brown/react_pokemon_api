import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="p-4 bg-white fixed bottom-0 shadow flex md:items-center lg:items-center items-center justify-center md:p-6 w-full lg:w-full md:w-full lg:justify-center md:justify-center ">
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
