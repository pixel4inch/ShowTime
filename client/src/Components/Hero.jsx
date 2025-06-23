import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Hero() {
    const navgate = useNavigate();

  return (
    <>
       <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-36 gap-4 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'> 
        
        <img src={assets.marvelLogo} className='max-h-11 lg:h-11 '/>
        <h1 className='text-5xl font-extrabold md:text-[70] md:leading-12' >
            Guardians <br/> of the Galaxy
        </h1>

        <div className='flex align-middle justify-start text-gray-300 gap-4'>

            <p>Action | Adventure | Sci-Fi</p>

            <div className='flex justify-start items-center gap-1'>
                <Calendar className="w-4.5 h-4.5"/> 2018
            </div>

            <div className='flex justify-start items-center gap-1'>
                <Clock className="w-4.5 h-4.5"/> 2h 12m
            </div>


        </div>

        <div>
            <p className='max-w-md text-gray-300'>In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.</p>
        </div>


          <div>
            <button onClick={ () => navgate('/movies')}className='flex justify-center items-center gap-2 px-6 py-3 text-sm bg-pirmary hover:bg-primary-dull transition  font-medium cursor-pointer  rounded-full'>
                
                Explore Movies
                <ArrowRight className='w-5 h-5'></ArrowRight>
                
                </button>
        </div>

        </div> 
        
    </>
  )
}

export default Hero