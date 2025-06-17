import React, { useContext, useEffect, useState } from 'react';

import AllCards from '../components/AllProduct/AllCards';
import TableRo from '../components/AllProduct/TableRo';
import axios from 'axios';
import { AuthContext } from '../Auth/auth';
import { Helmet } from 'react-helmet';

const AllProduct = () => {
    const { users } = useContext(AuthContext)

    const [products, setProducts] = useState([])
    // const [sort , setSort]=useState([])
    const [isDropDown, setIsDropDown] = useState(false)
    const [view, setView] = useState(true)
 
    useEffect(() => {
        if (users?.email) {
            const email = users?.email
            axios.get(`http://localhost:3000/product?email=${email}`, { withCredentials: true })
                .then(res => {

                    setProducts(res.data)
                    // setSort(res.data)

                })
                .catch(error => console.log(error))
        }

    }, [users])


    const handleSort = () => {
        
        const bigQtyProduct = products?.filter(product => product.Minimum_selling_quantity > 100)
         setProducts(bigQtyProduct)
        
        console.log(bigQtyProduct)
    }

    // console.log(sort)
    console.log(products)

    return (
        <div className='container mx-auto'>
            <Helmet>
                <title>All product pages</title>
            </Helmet>

            <div className='flex justify-end-safe mt-10 gap-2'>


                <div>
                    <button onClick={handleSort} disabled={products.length === 0} className='btn'>Show Available Products</button>
                </div>


                <div className='relative'>
                    <button className='btn w-40 flex bg-emerald-500 text-white' onClick={() => setIsDropDown(!isDropDown)}>View</button>

                    {isDropDown && <span className={` mt-2 bg-emerald-50  space-y-2 absolute z-50 transition-all duration-500    rounded-md shadow-md  w-40`}>

                        <p onClick={() => setView(true)} className='p-2 hover:bg-emerald-500 hover:text-white cursor-pointer   '>Card View</p>
                        <p onClick={() => setView(false)} className='p-2 hover:bg-emerald-500 hover:text-white cursor-pointer  '>Table View</p>
                    </span>}


                </div>
            </div>



            {
                view ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        products?.map(card => <AllCards key={card._id} card={card}></AllCards>)
                    }
                </div> : <div>
                    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                        <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-xs">
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col className="w-24" />
                                </colgroup>
                                <thead className="dark:bg-gray-300">
                                    <tr className="text-left">
                                        <th className="p-3">Image</th>
                                        <th className="p-3">Product Tittle</th>
                                        <th className="p-3">Category</th>
                                        <th className="p-3">Product Qty</th>
                                        <th className="p-3 text-right">Amount</th>
                                        <th className="p-3">Status</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        products?.map(tableR => <TableRo key={tableR._id} tableR={tableR}></TableRo>)
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            }


        </div>
    );
};

export default AllProduct;