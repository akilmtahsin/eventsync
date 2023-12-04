



const NavBar = () => {
 
  return(
    <div className='sticky top-0 z-10 font-display flex justify-between items-center h-full max-w-full mx-auto px-4 py-2 backdrop-blur-md '>
      <img src="/EventSync.png" alt="logo" className="h-8 w-auto" />
      <ul className='flex justify-between'>
        <li className='text-lg p-2  my-3 mr-4 ml-2 hover:text-blue-500 transition-colors'><a href="">Events</a></li>
        <li className='text-lg p-2  my-3 mr-4 ml-2 hover:text-blue-500 transition-colors'><a href="">Speakers</a></li>
        <li className='text-lg p-2 mr-4 ml-2 rounded-lg hover:bg-gray-200  my-3'><a href="">Log In</a></li>
        <li className='text-lg p-2 ml-2 rounded-lg text-white bg-gray-600  hover:drop-shadow-lg my-3'><a href="">Sign Up</a></li>
      </ul>
    </div>
  )
}

export default NavBar

