import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
import Card from '../Card';
import { useParams } from 'react-router';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const CategoriesCards = () => {
    // const data = useLoaderData()
    // console.log(data)
    const [data, setData] = useState(null)

    const { category } = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3000/product/${category}`, { credentials: true })
            .then(res => {

                setData(res.data)


            })
            .catch(error => console.log(error))



    }, [category])

    if(!data){
       return <span className="loading loading-spinner loading-xl"></span>
    }


    return (
        <div className='container mx-auto'>
             
            <h1 className='text-center text-4xl font-extrabold mt-10'>{data[0].Product_Category}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data?.map(item => <Card key={item._id} item={item}></Card>)
                }
            </div>
            <p>{data.length}</p>
        </div>
    );
};

export default CategoriesCards;