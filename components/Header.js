import React from 'react'
import Banner from './Banner'
import Nav from './Nav'

const Header = () => {
  return (
    <header className="relative bg-gray-900 text-gray-200 sm:min-h-1/2" data-rellax-speed="-1">
        <div className='h-full h-inherit'>
            <Nav />
            <Banner />
        </div>
    </header>
  )
}

export default Header