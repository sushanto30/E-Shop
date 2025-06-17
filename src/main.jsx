import { StrictMode  } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SignUp.jsx';
import AddProduct from './Pages/AddProduct.jsx';
import AuthProvider from './Auth/AuthProvider.jsx';
import CategoriesCards from './components/CategoriesCards/CategoriesCards.jsx';
import AllProduct from './Pages/AllProduct.jsx';
import Details from './components/Details.jsx';
import Cart from './components/Cart.jsx';
import AllProductUpdate from './components/AllProduct/AllProductUpdate.jsx';
import MyProduct from './Pages/MyProduct.jsx';
import PrivetRoute from './components/PrivetRoute.jsx';
import ErrorPages from './Pages/ErrorPages.jsx';
// import { AuthContext } from './Auth/auth.js';

// const {users}=useContext(AuthContext)


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        Component: Home,
        
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/signup',
        Component: SignUp
      },
      {
        path: '/addProduct',
         element: <PrivetRoute><AddProduct></AddProduct></PrivetRoute>
        // Component: AddProduct,
        
      },
      {
        path:'/allProduct',
        element: <PrivetRoute><AllProduct></AllProduct></PrivetRoute>
        // Component:AllProduct,
         
      },
      {
        path:'/myProduct',
        element: <PrivetRoute><MyProduct></MyProduct></PrivetRoute>
        // Component:MyProduct
      },
      {
        path:'/allProductUpdate/:id',

        Component:AllProductUpdate,
       

      },
      {
        path:'/categoryCard/:category',
        Component:CategoriesCards,
         
      },
      {
        path:'/details/:id',
        Component:Details,
        
      },
      {
        path:'/cart',
        element: <PrivetRoute><Cart></Cart> </PrivetRoute>
        // Component:Cart,
        
      },
       

    ]
  },
  {
    path:'/*',
    Component:ErrorPages
  }
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
