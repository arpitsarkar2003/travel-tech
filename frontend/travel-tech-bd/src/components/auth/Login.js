import React, { useState } from 'react'
import { useStateValue } from '../../context/StateProvider';
// import '../../'

function Login({ logo, login_logo }) {
    const [userOBJ, setUserOBJ] = useState({
        email: "ariksarkar@gmail.com",
        password: "helloworld",
    });

    const [state, dispatch] = useStateValue();

    // console.log(state);

    const changeHandler = (event) => {
        setUserOBJ({ ...userOBJ, [event.target.name]: event.target.value });
    }
    const addUser = (event) => {
        // dispatch the items into data layer
        // dispatch({
        //     type:"LOGIN",
        //     payload: userOBJ
        // });
        event.preventDefault();
    };
    return (
        <div className='flex justify-between h-screen items-center'>
            <div className="justify-center flex">
                <img alt='Brand Logo' className='h-32 md:h-64 w-screen' src={logo} />
            </div>
            <div className='w-screen'>
                <div className='flex w-screen p-10 m-5 rounded-lg shadow-lg bg-white max-w-md mx-auto'>
                    <div className='flex justify-center z-10'>
                        <form onSubmit={addUser} className="w-96">
                            <label className="form-label inline-block mb-2 text-gray-700">Email address</label>
                            <input className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' type="email" name='email' value={userOBJ.email} onChange={(e) => changeHandler(e)} />
                            <div className="form-group mb-6">
                                <label className="form-label inline-block mb-2 text-gray-700">Password</label>
                                <input type="password" name='password' value={userOBJ.password} onChange={(e) => changeHandler(e)} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                                    placeholder="Password" />
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                <div className="form-group form-check">
                                    <input type="checkbox"
                                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        id="exampleCheck2" />
                                    <label className="form-check-label inline-block text-gray-800">Remember me</label>
                                </div>
                                <a href="#!"
                                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot
                                    password?</a>
                            </div>
                            <input type="submit" className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" />
                        </form>
                    </div>
                    <div className='w-full absolute top-[25%] bg-[#F7AB0A]/10 left-0 h-[450px] -skew-y-12' />

                </div>
            </div>
        </div>
    )
}

export default Login
//<input type="password" name='password' value={userOBJ.password} onChange={(e) => changeHandler(e)}/>