
import React from 'react';
import logo from '../../public/assets/logo.svg'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const menuItem = () => {
        return (
            <>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'> About</Link></li>
                <li><Link href='/service'>Services </Link></li>
                <li><Link href='/blog'>Blog</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
            </>
        )
    }
    return (
        <div className=''>
            <div className="navbar w-11/12 pb-4 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {menuItem()}
                        </ul>
                    </div>
                    <Link href='/' className=" text-xl">
                        <Image src={logo} className='w-[100ox] h-[78px]' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItem()}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="border border-[FF3811] rounded-xl px-3 py-1">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;