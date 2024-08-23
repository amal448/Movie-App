import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { NavLink, useNavigate,Link, useLocation } from 'react-router-dom'
import usericon from '../assets/user.png'
import { IoIosSearch } from "react-icons/io";
import { navigation } from '../constant/navigation';


const Header = () => {
    const location=useLocation()
    const removeSpace=location?.search?.slice(3)?.split("%20")?.join(" ")
    
    const [searchInput,setSearchInput]=useState(removeSpace)
    const navigate=useNavigate()
    console.log(location.search.slice(3));
    
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    useEffect(()=> {
        if(searchInput)
        {
            navigate(`/search?q=${searchInput}`)
        }
    },[searchInput])
    
    return (
        <header className='fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40'>
            <div className='container mx-auto px-3 lg:px-12 flex items-center h-full '>
                <Link to={'/'}>
                    <img src={logo} width={120} alt="" />
                </Link>

                <nav className=' hidden lg:flex items-center gap-1 ml-5'>
                    {
                        navigation.map((nav, index) => {
                            return (
                                <div>
                                    <NavLink key={nav.label} to={nav.href} className={({ isActive }) => `pl-3 hover: text-neutral-100 ${isActive && "text-neutral-100"}`}>
                                        {nav.label}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </nav>
                <div className='ml-auto flex items-center gap-5'>
                    <form  onSubmit={handleSubmit} action="" className='flex items-center gap-2'>
                        <input onChange={(e)=>setSearchInput(e.target.value)} type="text" placeholder='Search here...'
                         value={searchInput}
                         className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
                        />
                        <button className='text-2xl text-white'>
                            <IoIosSearch />
                        </button>
                    </form>
                    <div className='w-8 h-8 cursor-pointer active:scale-50 rounded-full overflow-hidden transition-all'>
                        <img src={usericon} width='w-full h-full' alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header