import React from 'react'
import { heart } from '../assets/images'

const Footer = () => {
  return (
    <div className='flex text-lg font-bold items-center gap-2 justify-center mt-24'>
    Made With <img src={heart} alt='heart-image' className='w-5 h-5' /> Vijaykumar
    </div>
  )
}

export default Footer