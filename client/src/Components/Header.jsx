import React, {useEffect, useState} from 'react'
import { Link, useNavigate,NavLink  } from 'react-router-dom'
import {assets} from '../assets/assets'
import { MenuIcon, Scroll, SearchIcon, Ticket, TicketPlus, UserRoundSearch, XIcon } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

function Header() {

  const [isOpen, setIsOpen]= useState(false)
  const navtagate = useNavigate()
  const {user} = useUser()
  const {openSignIn} = useClerk()
  const [background, setBackground] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };

  useEffect(() => {
    // Attach the scroll listener
    window.addEventListener('scroll', handleScroll);
    // Clean up listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
    console.log(scroll)
  }, []);


  return (
    <div className={`fixed transition w-full top-0  left-0 z-50 flex justify-between items-center px-6 md:px-16 lg:px-36 py-5 ${background ? 'bg-black/100' : ' bg-black'/0}`}>

      <Link to='/' className='max-md:flex-1 '>
       <img src={assets.logo} className='w-36 h-auto' alt='ShowTime' title="ShowTime"/>
      </Link>

      {/* Links */}

        <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full  backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 haderNavbar  ${isOpen ? 'max-md:w-full' : 'max-md:max-md:w-0'} `}>
          
          <XIcon className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer' onClick={(e)=> setIsOpen(!isOpen) }></XIcon>
          <NavLink  className="hover:text-primary-dull " onClick={(e)=>{ scrollTo(0,0);  setIsOpen(false)}}   to='/'> Home</NavLink>
          <NavLink  className="hover:text-primary-dull " onClick={(e)=>{ scrollTo(0,0);  setIsOpen(false)}} to='/movies'>Movies</NavLink>
          <NavLink  className="hover:text-primary-dull " onClick={(e)=>{ scrollTo(0,0);  setIsOpen(false)}} to='/theaters'>Theaters</NavLink>
          <NavLink  className="hover:text-primary-dull " onClick={(e)=>{ scrollTo(0,0);  setIsOpen(false)}} to='/releases'>Releases</NavLink>
          <NavLink  className="hover:text-primary-dull " onClick={(e)=>{ scrollTo(0,0);  setIsOpen(false)}} to='/favorite'>Favorites</NavLink>
        </div>
      
        {/*--search  & Login- */}
        <div className='flex justify-between align-middle gap-8'>
         <SearchIcon className='cursor-pointer  w-6 h-6 max-md:hidden'/>

          {
              !user ? 

              (


        <button onClick={openSignIn} className=' cursor-pointer px-4 py-1 sm-px-7 sm-py-2 bg-primary hover:bg-primary-dull rounded-full transition font-medium'>LogIn</button>
              ):

              (
                    <UserButton>
                              <UserButton.MenuItems>
                                <UserButton.Action 
                                  label='My Booking' labelIcon={<TicketPlus width={15}/>}
                                  onClick={ () => navtagate ('/mybooing')}>
                                </UserButton.Action>
                              </UserButton.MenuItems>

                    </UserButton>

              )
              


          }





        
      </div>
      {/* --- Mobile Menu--- */}
      <MenuIcon className='w-8 h-8 cursor-pointer md:hidden max-md:ml-4' onClick={(e)=> setIsOpen(!isOpen) }/>
    </div>
  )
}

export default Header