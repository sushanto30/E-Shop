import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Auth/auth';
import Lottie from 'lottie-react';
import AddData from './../../src/assets/Animation - 1750144183306.json'
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const AddProduct = () => {

  const { users,loading } = useContext(AuthContext)

  if(loading){
    return <span className="loading loading-spinner loading-xl"></span>
  }



  const handleProductAdd = (e) => {
    e.preventDefault();
    const from = e.target;
    const fromData = new FormData(from);
    const productDe = Object.fromEntries(fromData.entries())

    if (users?.email) {
      const email = users?.email
       
      axios.post('https://b2b-projects-server.vercel.app/product', { productDe, email }, { withCredentials: true })
        .then(() =>  toast.success('Product add successfully'))
        .catch(( ) => toast.error('Product Not Add'))
    }



     
  }


  return (
    <section className="p-6 bg-[#F0F4F3] text-gray-900">
      <Helmet>
        <title>Add product pages</title>
      </Helmet>
      <form onSubmit={handleProductAdd} className="container flex flex-col mx-auto space-y-12">
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm  bg-green-100">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium text-4xl"> Product Information </p>
            <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
            <div>
              <Lottie animationData={AddData} loop={true}></Lottie>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="Product Image" className="text-sm font-bold">Product Image </label>
              <input id="Product Image" type="text" placeholder="Product Image" name='Product_Image' className="w-full rounded-md p-2 bg-white" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="Brand Name" className="text-sm"> Brand Name</label>
              <input id="Brand Name" type="text" name='Brand_Name' placeholder="Brand Name" className="w-full rounded-md focus:ring p-2 bg-white " />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor=" Product Tittle" className="text-sm"> Product Tittle</label>
              <input id="Product Tittle " type="text" name='Product_Tittle' placeholder="Product_Tittle" className="w-full rounded-md p-2  bg-white " />
            </div>
            <div className="col-span-full">
              <label htmlFor="address" className="text-sm"> Short Description</label>
              <input id="address" type="text" name='Short_Description' placeholder="Short Description" className="w-full rounded-md p-2 bg-white  " />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-sm"> Product Quantity</label>
              <input id="city" type="number" name='Product_Quantity' placeholder="Product_Quantity" className="w-full rounded-md p-2 bg-white " />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="state" className="text-sm">Minimum selling quantity </label>
              <input id="state" type="number" name='Minimum_selling_quantity' placeholder="Minimum selling quantity" className="w-full p-2 rounded-md bg-white " />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="Product Category" className=" text-sm "> Product Category</label>
              <select id="Product Category" name='Product_Category' className=" w-full rounded-md p-2 bg-white ">

                <option>Select</option>
                <option>Electronics & Gadgets</option>
                <option>Home & Kitchen Appliances</option>
                <option>Fashion & Apparel</option>
                <option>Industrial Machinery & Tools</option>
                <option>Health & Beauty</option>
                <option>Automotive Parts & Accessories</option>
                <option>Office Supplies & Stationery</option>

              </select>
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="Product price" className="text-sm font-bold">Product price </label>
              <input id="Product price" type="number" placeholder="Product Price" name='Product_price' className="w-full p-2 rounded-md  bg-white" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="Product Rating" className="text-sm font-bold">Product Rating </label>
              <input id="Product Rating" type="number" min={1} max={5} placeholder="Product Image" name='Product_Rating' className="w-full p-2 rounded-md  bg-white" />
            </div>
            <button type='submit'
              className="group w-full relative   items-center-safe overflow-hidden rounded-sm bg-emerald-600  px-24 md:px-0  py-3 text-white "

            >
              <span className="absolute -start-full transition-all group-hover:start-4">
                <svg
                  className="size-5 shadow-sm rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-xs  font-medium transition-all group-hover:ms-4"> Add Product</span>
            </button>
          </div>



        </fieldset>

      </form>
    </section>

  );
};



export default AddProduct;