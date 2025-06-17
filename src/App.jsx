 
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './Pages/Footer'

function App() {
 

  return (
    <>
       <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
       
    </>
  )
}

export default App
