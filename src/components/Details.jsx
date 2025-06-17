import React, { useContext, useEffect, useState } from 'react';
import { Link,  useNavigate, useParams } from 'react-router';
import { Rating } from '@smastrom/react-rating'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import '@smastrom/react-rating/style.css'
import { AuthContext } from '../Auth/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const Details = () => {
    // const data = useLoaderData()
    const [data, setData] = useState(null)
    const { users } = useContext(AuthContext)
    const [quantity, setQuantity] = useState(1)
    const [isDisable, setIsDisable] = useState(false)
    const [stock, setStock] = useState(0)
    const navigates = useNavigate()

    const { id } = useParams()

    useEffect(() => {

        axios.get(`https://b2b-projects-server.vercel.app/product/details/${id}`, { credentials: true })
            .then(res => {

                setData(res.data)
                setStock(Number(res.data.Product_Quantity))

            })
            .catch(error => console.log(error))



    }, [data])
    




    if (!data) {
        return <span className="loading loading-spinner loading-xl"></span>
    }








    const { Brand_Name,
        _id,
        Minimum_selling_quantity,
        Product_Category,
        Product_Image,
        Product_Quantity,
        Product_Rating,
        Product_Tittle,
        Product_price,
        Short_Description } = data

    // console.log(data)

        
    



    const handelMinus = () => {
        if (!quantity <= 0) {
            setQuantity(quantity - 1)

        }
        else setIsDisable(true)

    }
    const handelPlus = () => {
        setQuantity(quantity + 1)
        setIsDisable(false)
    }

    const handleBuyProduct = () => {

        // if ( Minimum_selling_quantity >= quantity) {
        //     console.log('clear')
        // }


        if (Minimum_selling_quantity <= quantity) {
            if (Product_Quantity >= quantity) {
                axios.post(`https://b2b-projects-server.vercel.app/product/quantityUpdate/${_id}`, { byQuantity: Number(quantity), user: users.email }).then(res => {
                    setStock(res.data.Product_Quantity)
                    toast.success('Product Add To Cart')
                    navigates(`/cart`, { state: { product: res.data } })
                    // console.log(res.data)
                }).catch(error => console.log(error))
            } else  toast.warn('stock out')
        } else  toast.warning(`minimum buy ${Minimum_selling_quantity}`)
    }




    return (


        <section className="text-gray-600 body-font overflow-hidden">
            <Helmet>
                <title>Product Details</title>
            </Helmet>
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={Product_Image} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0  ">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{Brand_Name}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{Product_Tittle} </h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <Rating
                                    style={{ maxWidth: 100 }}

                                    value={Product_Rating}
                                    readOnly
                                ></Rating>
                                <span className="text-gray-600 ml-3"> 10 Reviews</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                {Product_Category}
                            </span>
                        </div>
                        <p className="leading-relaxed"> {Short_Description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex ">
                                <span className="mr-3"> Product Quantity :</span>
                                <h1 className='text-black font-bold'>{Product_Quantity}</h1>

                            </div>
                            <div className="flex ml-6 pl-3 py-2 border-l-2 border-gray-200 items-center">
                                <span className="mr-3">MInimum selling quantity :</span>
                                <h1>{Minimum_selling_quantity}</h1>

                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">${Product_price}.00</span>
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="flex ml-auto text-white  bg-emerald-600 border-0 py-2 px-6 focus:outline-none   rounded">Buy Now</button>

                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
                                <div className="modal-box">
                                    <h1 className="font-bold text-3xl text-center">CheckOut</h1>
                                    {/* <img classNameName='w-24' src={Product_Image} alt="" /> */}
                                    <div className='mt-10 space-y-3'>
                                        <h3 className='text-xl font-medium'>Product Name  : {Product_Tittle}</h3>
                                        <h3 className='text-xl font-medium'>Product Price : ${Product_price}.00</h3>
                                        <h3 className='text-xl font-medium'>Product stock : {stock}</h3>
                                        <h3 className='text-xl font-medium'>Min sell Qty  : {Minimum_selling_quantity}</h3>
                                    </div>
                                    <div className='space-y-3 mt-5'>
                                        <div className='flex items-center gap-2'>
                                            <h1> Name : </h1>
                                            <label className="input validator">
                                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <g



                                                        fill="none"
                                                        stroke="currentColor"
                                                    >
                                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                                    </g>
                                                </svg>
                                                <input type="email" value={users?.email} readOnly />
                                            </label>
                                        </div>

                                        <div className='flex items-center gap-2'>
                                            <h1> Name : </h1>
                                            <label className="input validator">
                                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <g
                                                        fill="none"
                                                        stroke="currentColor"
                                                    >
                                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                    </g>
                                                </svg>
                                                <input
                                                    type="text"

                                                    value={users?.DisplayName}
                                                    readOnly

                                                />
                                            </label>
                                        </div>


                                    </div>

                                    <div className='bg-gray-100 py-2 rounded-md space-x-7 w-1/2 md:w-1/3 mx-auto flex justify-center items-center gap-1 mt-6'>
                                        <button onClick={handelMinus} disabled={isDisable} className="   hover:cursor-pointer btn-square">
                                            <FaMinus></FaMinus>
                                        </button>
                                        <button className="  btn-square">
                                            <p>{quantity}</p>
                                        </button>
                                        <button onClick={handelPlus} className=" hover:cursor-pointer btn-square">
                                            <FaPlus></FaPlus>
                                        </button>
                                    </div>

                                    <div className="modal-action justify-center">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn px-8 hover:bg-[#e55638] hover:text-white ">Close</button>
                                        </form>
                                        <button onClick={handleBuyProduct} className='btn px-8 hover:bg-[#50C878] hover:text-white'>Add To Cart</button>
                                    </div>
                                </div>
                            </dialog>

                        </div>

                    </div>
                </div>
            </div>

        </section>


    );
};

export default Details;