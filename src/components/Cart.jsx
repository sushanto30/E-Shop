 
import axios from 'axios';
import {   useEffect, useState  } from 'react';
// import {   useNavigate,   } from 'react-router';
import { AuthContext } from '../Auth/auth';
import CartTableRo from './CartTableRo';

const Cart = () => {

   
    const [data , setData]=useState([])
   
    // const id = useParams()
    //  console.log(id)

    // const location = useLocation()
    // const data = location.state?.product
    // setProduct(data)
//    const [product , setProduct]=useState(data)

    // console.log(data)b

    useEffect(()=>{

        axios.get('http://localhost:3000/product/cart' ,{withCredentials:true})
        .then(res => setData(res.data))
        .catch(error=>console.log(error))


    },[])

    if(!data){
        return <span className="loading loading-spinner loading-xl"></span>
    }

 


    return (
        <div className="container p-2 mx-auto sm:p-4 text-gray-100 dark:text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">Cart List ...</h2>
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
                    <thead className="bg-gray-700 dark:bg-gray-300">
                        <tr className="text-left">
                            <th className="p-3">Image</th>
                            <th className="p-3">Product Name</th>
                            <th className="p-3">Stock</th>
                            <th className="p-3">My Quantity</th>
                            <th className="p-3 text-right">Amount</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            data.map(item=><CartTableRo key={item._id} item={item}></CartTableRo>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;