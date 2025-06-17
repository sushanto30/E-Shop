import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaSackDollar } from 'react-icons/fa6';
import { Link, Links, useNavigate } from 'react-router';
import { HydratedRouter } from 'react-router/dom';

const Card = ({ item }) => {
    // console.log(item)

     const {  
        _id,
        Product_Category,
        Product_Image,
        Product_Rating,
        Product_Tittle,
        Product_price,
        Short_Description }= item


    const navigates = useNavigate()

    const handleNavigate = () => {
        navigates(`/details/${item._id}`)

    }

    return (
        <div>
 

            <div class="p-4  ">
                <div class="h-full border-2 border-gray-200 bg-[#F0F4F3] border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-48 md:h-40 w-full object-cover object-center" src={Product_Image} alt="blog" />
                    <div class="p-6">
                        <h2 class="tracking-widest text-[#4B6F44] bg-white p-2.5 w-2/3 text-center rounded-full text-xs title-font font-bold  mb-1">{Product_Category}</h2>
                        <h1 class="title-font text-lg font-medium text-[#1B3B17] mb-3">{Product_Tittle}</h1>
                        <p class="leading-relaxed mb-3 text-[#4B6F44]">{Short_Description}</p>
                        <div class="flex items-center flex-wrap ">

                            
                                < button onClick={handleNavigate} type='button' class=" bg-emerald-600  text-white  btn inline-flex items-center md:mb-2 lg:mb-0">Details
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>

                            



                            <span class="text-amber-300 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-green-600 gap-1.5 ">
                                <FaStar></FaStar> <span className='text-emerald-600 font-bold'> {Product_Rating}.0</span>
                            </span>
                            <span class=" gap-1.5 inline-flex items-center leading-none text-sm">
                                <FaSackDollar></FaSackDollar>  <span className='text-emerald-600 font-bold'>{Product_price}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;