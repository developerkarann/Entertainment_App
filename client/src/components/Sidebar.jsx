import React, { useState } from 'react'
import { FaSearch, FaFilm, FaBookmark } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { MdMovie } from "react-icons/md";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';


const Sidebar = () => {
     const dispatch = useDispatch()
    return (
        <>
            <div className="sm:w-32 bg-[#10141E] flex flex-col items-center sm:pt-7 ">
                <div className="functions w-[100%] sm:w-18 bg-[#161D2F] sm:h-[95vh] p-6 sm:rounded-2xl flex sm:block justify-between items-center">
                    <div className="topSection flex justify-center items-center sm:mb-10 cursor-pointer ">
                        <Link to='/'> <FaFilm className="text-red-500 sm:text-2xl text-4xl" /> </Link>
                    </div>
                    <div className="middleSection topSection flex justify-center items-center sm:flex-col gap-5 cursor-pointer">
                        <Link to="/"> <FiGrid className="text-white sm:text-xl text-2xl" /> </Link>
                        <Link to="/movies" > <MdMovie className="text-white sm:text-xl text-2xl" /> </Link>
                        <Link to="/series"><MdLiveTv className="text-white sm:text-xl text-2xl" /> </Link>
                        <Link to="/bookmark"> <FaBookmark className="text-white sm:text-xl text-2xl" /></Link>

                    </div>
                    <div className="bottomSection flex sm:absolute sm:bottom-5">
                        <div className=" profile sm:mb-2 cursor-pointer" onClick={()=>{ dispatch(logout()) }}>
                           {/* <Link to="/login"> <BiSolidUserCircle className="text-white sm:text-3xl text-4xl rounded-full" /> </Link>  */}
                            <BiSolidUserCircle className="text-white sm:text-3xl text-4xl rounded-full"  /> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar