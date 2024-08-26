import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2'>
      <div className='flex item-center justify-center gap-4 '>
        <p className='font-bold'>CopyRight ⓒ All Rights Are Reserved</p>
      {/* <Link to='/'>About</Link> */}
      {/* <Link to='/'>Contact</Link> */}
      </div>
    </footer>
  )
}

export default Footer