import React, { useContext, useState  } from 'react';
// import { Link, NavLink } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Auth/auth';
import { Tooltip } from 'react-tooltip';
import { useNavigate } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import { ToastContainer } from 'react-toastify';
// import { Links } from 'react-router';

const Navbar = () => {

    const { users, handleLogOut,loading } = useContext(AuthContext)
    const navigate = useNavigate();
      const [isDropDown, setIsDropDown] = useState(false)

    // if (loading) {
    //     return <span className="loading loading-spinner loading-xl"></span>
    // }



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
        handleLogOut().then(() => navigate('/login')).catch(error => {
        console.error('Logout error:', error)})
    }


    return (
        <div className='container mx-auto'>
            <ToastContainer></ToastContainer>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start gap-1 md:gap-3">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}


                        </ul>
                    </div>
                    {/* <a className="   text-xl">daisyUI</a> */}
                    <img className='w-16' src="/logo.jpg" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">



                    <div className='flex justify-center-safe items-center gap-1'>
                        <p typeof='button ' className=' mr-1.5 lg:mr-3 w-4 md:w-10'><Link to={'/cart'}><FaCartArrowDown></FaCartArrowDown></Link></p>
                       {
                        loading ?  <span className="loading loading-spinner loading-xl"></span>  : <div>
                            {
                                users ? <div className="avatar">
                                    <div className=" w-8 lg:w-12  "  >

                                        <a
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content={users.displayName}
                                        // data-tooltip-place="top"
                                        >
                                            <img src={users.photoURL} />
                                        </a>


                                        <Tooltip id="my-tooltip" />

                                    </div>
                                    <button events={['click']} onClick={() => handleSignOut()} className='btn ml-3 bg-emerald-600 text-xs md:text-sm text-white'> Log Out </button>
                                </div>
                                    : <div className='gap-2'>
                                        <Link to={'/login'} className="btn  bg-emerald-600 text-white">  Log in </Link>
                                        <Link to={'/signup'} className="btn bg-emerald-600 text-white"> Sign Up </Link>
                                    </div>
                            }
                        </div>
                       }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Navbar;