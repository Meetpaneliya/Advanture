import React from 'react'
import logo from "../assets/logoimg-removebg-preview.png"
import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

            <Link to="/">
                <img src={logo} alt="Logo" width={260} height={132} loading="lazy" />
            </Link>

            <nav>
                <ul className=' flex gap-x-6'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Login - SignUp - LogOut - Dashboard */}
            <div className='flex items-center gap-x-4'>
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
                </Link>
                <Link to="/signup">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Register
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Navbar
