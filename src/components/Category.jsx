import React, { useContext, useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import axios from 'axios';
import { AuthContext } from '../Auth/auth';

const Category = () => {

    const { users } = useContext(AuthContext)


    const [cat, setCat] = useState([])



    useEffect(() => {
        if (users?.email) {
            const email = users.email

            axios.get(`http://localhost:3000/product?email=${email}`, {  withCredentials: true })
                .then(res => {
                    console.log(res.data)
                    const categories = res.data?.map(item => item.Product_Category)


                    const uniqueCategories = [...new Set(categories)]
                    setCat(uniqueCategories)
                    // setData(res, data)
                })
                .catch(error => console.log(error))

        }





    }, [users])


    return (

        <div className='container mx-auto mt-10'>

            <h1 className='text-center font-extrabold text-4xl'>All Categories</h1>

            <div className='grid grid-cols-3 mt-7 justify-items-center mb-10 gap-5'>
                {
                    cat?.map((items, ind) => <CategoryCard key={ind} items={items}></CategoryCard>)
                }
            </div>
        </div>

    );
};

export default Category;