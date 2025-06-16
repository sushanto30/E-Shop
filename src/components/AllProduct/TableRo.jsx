import React from 'react';
import { Link } from 'react-router';

const TableRo = ({tableR}) => {
    console.log(tableR)
    
    const {  
        _id,
         
        Product_Category,
        Product_Image,
        Product_Quantity,
        
        Product_Tittle,
        Product_price,
        } = tableR


    return (
        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
            <td className="p-3">
                 <img className='w-24' src={Product_Image} alt="" />
            </td>
            <td className="p-3">
                <p>{Product_Tittle}</p>
            </td>
            <td className="p-3">
                <p>{Product_Category}</p>
                 
            </td>
            <td className="p-3">
                <p>{Product_Quantity}</p>
               
            </td>
            <td className="p-3 text-right">
                <p>${Product_price}.00</p>
            </td>
            <td className="p-3 text-right">
                <span className="px-3 py-1 font-semibold rounded-md  bg-emerald-600 text-white">
                     <Link to={ `/allProductUpdate/${_id}`}><span >Update</span></Link>
                    
                </span>
            </td>
        </tr>
    );
};

export default TableRo;