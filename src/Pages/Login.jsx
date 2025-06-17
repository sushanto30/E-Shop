import Lottie from 'lottie-react';
import React, { use } from 'react';
import loginAni from '../../src/assets/login.json'
 
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/auth';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
 

const Login = () => {
    const {handleSignInPass ,handleGoogleSign}= use(AuthContext)
    const navigate = useNavigate();
     const location = useLocation()
        const goToPath = location?.state?.form.pathname || '/' ;



    const handleSignIn = (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value
        const password = from.password.value
      

        if (password.length > 6) {
            if (password.match(/[a-z]/i)) {
                if (password.match(/[A-Z]/)) {
                    handleSignInPass(email, password).then((  ) =>  {
                        toast.success('Login successful')
                        navigate(goToPath, { replace: true })
                    } )
                    .catch(error => console.log(error))
                } else  toast.error(' Upper case letter must')
            } else  toast.error(' Lower case letter must')
        } else  toast.error('must be 6 letter')

        console.log(email , password)

    }
    const handleGoogleSignIn = ()=>{
            handleGoogleSign().then((  ) => { 
                 toast.success('Login successful')
                navigate(goToPath, { replace: true })
            }).catch(error => console.log(error))
        }


    return (
        <div className='container mx-auto mt-16 flex gap-5'>
            <Helmet>
                <title>Login pages</title>
            </Helmet>
            <div className="w-full     p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center dark:text-gray-600">Dont have account?
                    <Link to={'/signup'} rel="noopener noreferrer" className="focus:underline hover:underline hover:text-green-400">Sign up here</Link>
                </p>


                <form  onSubmit={handleSignIn} className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                    </div>
                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md  bg-green-600 text-gray-50">Sign in</button>
                </form>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-600" />
                    <p className="px-3 dark:text-gray-600">OR</p>
                    <hr className="w-full dark:text-gray-600" />
                </div>
                <div className="my-6 space-y-4">
                    <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="submit" className="flex items-center justify-center w-full p-4 space-x-4 border-0 rounded-md  hover:bg-green-600 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>

                </div>
            </div>
            <div className='justify-center mt-10'>
                <Lottie animationData={loginAni} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default Login;