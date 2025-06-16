import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Auth/auth';

const Navbar = () => {

    const { users, handleLogOut } = useContext(AuthContext)
    console.log(users)
    const [isDropDown, setIsDropDown] = useState(false)

    const link = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/addProduct'}> Add Product</NavLink></li>
        <li><NavLink to={'/allProduct'}> All Product</NavLink></li>
        <li><NavLink to={'/myProduct'}> My Product</NavLink></li>
        <li>
            <button className=' ' onClick={() => setIsDropDown(!isDropDown)}>Categories</button>

            {isDropDown && <ul className={` space-y-2 absolute z-50 transition-all duration-500  bg-white rounded-md shadow-md mt-8 w-40`}>
                <li><NavLink to={'/categoryCard/Home & Kitchen Appliances'}>Home & Kitchen Appliances</NavLink></li>
                <li><NavLink to={'/categoryCard/Fashion & Apparel'}>Fashion & Apparel</NavLink></li>
                <li><NavLink to={'/categoryCard/Industrial Machinery & Tools'}>Industrial Machinery & Tools</NavLink></li>
                <li><NavLink to={'/categoryCard/Health & Beauty'}>Health & Beauty</NavLink></li>
                <li><NavLink to={'/categoryCard/Automotive Parts & Accessories'}>Automotive Parts & Accessories</NavLink></li>
                <li><NavLink to={'/categoryCard/Office Supplies & Stationery'}>Office Supplies & Stationery</NavLink></li>
                <li><NavLink to={'/categoryCard/Electronics & Gadgets'}>Electronics & Gadgets</NavLink></li>

            </ul>}


        </li>




    </>

    const handleSignOut = () => {
        handleLogOut().then(() => {}).catch(( )=> { })
    }


    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}


                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">



                    <div className='flex justify-center-safe items-center gap-1'>
                        <p typeof='button ' className='btn'><NavLink to={'/cart'}>Cart</NavLink></p>
                        <div>
                            {
                                users ? < button onClick={handleSignOut} className="btn"> Sign Out </button> : <div>
                                    <Link to={'/login'} className="btn">  Log in </Link>
                                    <Link to={'/signup'} className="btn"> Sign Up </Link>
                                </div>
                            }
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Navbar;