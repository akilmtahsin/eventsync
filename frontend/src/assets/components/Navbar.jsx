import React from 'react'



const Navbar = () => {
  return(
    <div className='font-display flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 bg-white'>
      <img src="/EventSync.png" alt="logo" className="h-8 w-auto" />
      <ul className='flex'>
        <li className='p-4'>Events</li>
        <li className='p-4'>Speakers</li>
        <li className='p-4'>Login</li>
        <li className='p-4'>Sign Up</li>
      </ul>
    </div>
  )
}

export default Navbar