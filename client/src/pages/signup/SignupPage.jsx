import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {toast} from 'react-toastify'


const SignUpPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleSignup = async (e) => {
    e.preventDefault();

    const email = e.target.email.value
    const password = e.target.password.value
    const cPassword = e.target.cPassword.value

    if (cPassword !== password) {
      return alert('Enter the same Password...')
    }

    const response = await axios.post(`${import.meta.env.VITE_SERVER}/createuser`, { email, password })
    .then((res)=>{
      toast.success(res.data.message)
      setTimeout(()=>{
        navigate('/login')
      },2000)
    }).catch((err)=>{
      toast.error(err.response.data.message)
    })
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f111a]">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="mb-6">
          <Link to='/'>
            <svg width="32" height="32" viewBox="0 0 512 512" fill="#ff4b4b" xmlns="http://www.w3.org/2000/svg">
              <rect width="512" height="512" rx="15%" />
            </svg>
          </Link>
        </div>

        {/* Sign Up Form */}
        <div className="bg-[#161b26] p-10 rounded-2xl w-[360px] shadow-md">
          <h2 className="text-2xl text-white mb-6 font-medium">Sign Up</h2>
          <form className="space-y-5" onSubmit={handleSignup}>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email address</label>
              <input
                type="email"
                name='email'
                className="w-full px-4 py-2 rounded-md bg-[#0f111a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Password</label>
              <input
                type="password"
                name='password'
                className="w-full px-4 py-2 rounded-md bg-[#0f111a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Repeat password</label>
              <input
                type="password"
                name='cPassword'
                className="w-full px-4 py-2 rounded-md bg-[#0f111a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FC4747] hover:bg-[#ff6161] text-white py-3 rounded-md text-sm"
            >
              Create an account
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{' '}
            <Link to='/login'>
              <span className="text-[#FC4747] hover:underline cursor-pointer">
                Sign Up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
