import axios from 'axios';
import React, {   useEffect, useState } from 'react';
import { AuthContext } from '../Auth/auth';
import AllCards from '../components/AllProduct/AllCards';
import { Helmet } from 'react-helmet';

const MyProduct = () => {
    // const {  loading}=useContext(AuthContext)
    
    const [Products, setProducts] = useState(null)
   

    useEffect(() => {
    

        axios.get('http://localhost:3000/myProduct', { withCredentials: true })
            .then(res => {

                setProducts(res.data)
            


            })
            .catch(error => console.log(error))

    }, [])

    

    if (!Products ) {
        return <span className="loading loading-spinner loading-xl"></span>
    }


    return (
        <div className='container mx-auto justify-center-safe'>
            <Helmet>
                <title>My Product Pages</title>
            </Helmet>
           
           <h1 className='text-4xl font-extrabold text-center mt-10'> My Product List...</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
                {
                    Products?.map(card => <AllCards key={card._id} card={card}></AllCards>)
                }
            </div>

        </div>
    );
};

export default MyProduct;