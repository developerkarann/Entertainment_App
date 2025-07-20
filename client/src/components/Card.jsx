import React, { useEffect } from 'react'
import { FaBookmark, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
// import { setBookmark } from '../redux/slices/bookmarksSlice';
// import { toggleBookmark } from '../redux/slices/bookmarkSlice';
import axios from 'axios';

const Card = ({ data }) => {
    const token = useSelector((state) => state.auth.token);

    const location = useLocation();
    const dispatch = useDispatch();

    const pathSegments = location.pathname.split('/').filter(Boolean);
    const lastSegment = pathSegments[pathSegments.length - 1];


    const handleBookMark = async () => {

        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER}/bookmark`, {
                movieId: data.id,
                title: data.title,
                image: data.imageSet.horizontalPoster.w360,
                type: data.type
            }, {
                headers: {
                    Authorization: `${token}`,
                },
            })
            const {message} = response.data
            alert(message)
            // console.log('sucess: ', response.data)
        } catch (error) {
            console.log('Error:', error.message)
        }

    }

    return (

        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg ">
            <img src={data.imageSet.horizontalPoster.w360 && data.imageSet.horizontalPoster.w360} alt={data.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 hover:inset-0 bg-black/50 sm:p-4 p-1 flex flex-col justify-end">
                <Link to={`/${data.type}/${data.id}`} className='hover:cursor-pointer'>
                    <h3 className="text-white font-semibold text-sm">{data.title}</h3>
                </Link>
            </div>
            <FaBookmark className="absolute top-2 right-2 text-white hover:cursor-pointer" onClick={handleBookMark} />
        </div>

    )
}

export default Card