 
import axios from 'axios';
import { useContext  } from 'react';
import { useLocation, useNavigate  } from 'react-router';
import { AuthContext } from '../Auth/auth';

const Cart = () => {

    const {users} = useContext(AuthContext)
    const navigates = useNavigate()
     

    const location = useLocation()
    const data = location.state?.product
    // setProduct(data)
//    const [product , setProduct]=useState(data)

    // console.log(data)b
    const {  
        Product_Image,
        Product_Quantity,   
        Product_Tittle,
        Product_price,       
        carts } =  data


        const handleDeleteCart = (id)=>{
            console.log(id)
            axios.post(`http://localhost:3000/product/cart/${id}` , {user : users?.email}).then(res=>{
                if(res.data.modifiedCount){
                    //  const updateCart = product._id !== id
                    //  setProduct(updateCart)
                        navigates('/')

                }
                console.log(res.data)}).catch(error=>console.log(error))
        }




    return (
        <div className="container p-2 mx-auto sm:p-4 text-gray-100 dark:text-gray-800">
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
                        <tr className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50">
                            <td className="p-3">
                                <img src={Product_Image} alt="" />
                            </td>
                            <td className="p-3">
                                <p>{Product_Tittle}</p>
                            </td>
                            <td className="p-3">
                                <p>{Product_Quantity}</p>

                            </td>
                            <td className="p-3">
                                <p>{carts[0]?.byQuantity}</p>

                            </td>
                            <td className="p-3 text-right">
                                <p>{Product_price}</p>
                            </td>
                            <td className="p-3 text-right">
                                <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
                                    <span onClick={()=>handleDeleteCart(data._id)}>Delete</span>
                                </span>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;