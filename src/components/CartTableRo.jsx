import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Auth/auth';
import { toast } from 'react-toastify';

const CartTableRo = ({ item }) => {
    const navigates = useNavigate()
    const { users, loading } = useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }



    const {
        Product_Image,
        Product_Quantity,
        Product_Tittle,
        Product_price,
    } = item


    const handleDeleteCart = (id) => {
        console.log(id)
        axios.post(`http://localhost:3000/product/cart/${id}`, { user: users?.email }).then(res => {
            if (res.data.modifiedCount) {
                 toast.success('Product Remove from the Cart')
                navigates('/')

            }
            // console.log(res.data)
        }).catch(() =>  toast.error('product not remove'))
    }


    return (
        <tr className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50">
            <td className="p-3">
                <img className='w-20' src={Product_Image} alt="" />
            </td>
            <td className="p-3">
                <p>{Product_Tittle}</p>
            </td>
            <td className="p-3">
                <p>{Product_Quantity}</p>

            </td>
            <td className="p-3">
                {/* <p>{cart.byQuantity}</p> */}

            </td>
            <td className="p-3 text-right">
                <p>{Product_price}</p>
            </td>
            <td className="p-3 text-right">
                <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
                    <span onClick={() => handleDeleteCart(item._id)}>Delete</span>
                </span>
            </td>
        </tr>
    );
};

export default CartTableRo;