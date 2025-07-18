import { useEffect, useState } from "react";
import { FaCalendarAlt, FaImdb, FaLanguage, FaLink, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Loader from '../../components/Loader'
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../../redux/slices/searchMovieSlice";

const MovieDetails = () => {
  const data = useSelector((state)=> state.searchedMovie.movie)
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch()
  
  const { id } = useParams()
 

  useEffect(() => {
    dispatch(searchMovie({id,token}))
  }, [])

  console.log(data[0])

  return (
    <>
      {
        data.length !== 0 ? <div className="bg-[#0a0a0a] text-white min-h-screen flex items-center justify-center p-8">
          <div className="bg-[#1c1c1c] rounded-lg shadow-lg max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 overflow-hidden">
            {/* Poster */}
            <div className="md:col-span-1">
              <img
                src={data[0].imageSet.verticalPoster.w720}
                alt="To End All War Poster"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="md:col-span-2 p-6 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  {data[0].title}
                </h1>
                <div className="flex items-center mb-4">
                  <span className="text-xl font-semibold mr-2">{data[0].rating}</span>
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-300">
                  <span>Length: {data[0].runtime} min.</span>
                  <span className="flex items-center gap-1">
                    <FaLanguage /> English
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {data[0].releaseYear}
                  </span>
                  <span>Status: N/A</span>
                </div>

                <div className="mb-4">
                  {data && data[0].genres.map((item, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-700 rounded-full text-xs mr-2">{item.name}</span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm mb-6">
                  {data[0].overview}
                </p>

                <div>
                  <h2 className="font-semibold mb-2">Casts</h2>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {data[0].cast.map((cast, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700 rounded-full">{cast}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
                  <FaLink /> Website
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 rounded hover:bg-gray-700">
                  <FaImdb /> IMDB
                </button>
              </div>
            </div>
          </div>
        </div> : <>
        
       <Loader/>
        </>
      }
    </>
  );
};

export default MovieDetails;
