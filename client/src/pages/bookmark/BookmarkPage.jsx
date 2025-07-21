import { FaBookmark, FaSearch } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import EmptyBookmark from "../../components/EmptyBookmark";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookmarks } from "../../redux/slices/bookmarksSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const BookmarkPage = () => {


    const data = useSelector((state) => state.bookmarks.data)
    const token = useSelector((state) => state.auth.token);
    const [searchResult, setSearchResult] = useState('')

    const dispatch = useDispatch()
    const bookmarkData = [...data]

    const resultData = bookmarkData.filter((item) => (
        item.title.toLowerCase().includes(searchResult.toLowerCase())
    ))

    useEffect(() => {
        dispatch(fetchBookmarks(token))
    }, [])

    const Card = ({ data }) => {

        const handleDelete = async () => {
            console.log('MovieId', data.movieId)
            try {
                const response = await axios.delete(`${import.meta.env.VITE_SERVER}/bookmark/${data.movieId}`, {
                    headers: {
                        Authorization: `${token}`,
                    },
                })
                const { message } = response.data
                toast.success(message)
                setTimeout(() => {
                    window.location.reload()
                }, 2000)
            } catch (error) {
                toast.error(error.message)
                console.log('Error:', error.message)
            }

        }

        return (

            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg ">
                <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 hover:inset-0 bg-black/50 sm:p-4 p-1 flex flex-col justify-end">
                    <Link to={`/${data.type}/${data.movieId}`} className='hover:cursor-pointer'>
                        <h3 className="text-white font-semibold text-sm">{data.title}</h3>
                    </Link>
                </div>
                <FaBookmark className="absolute top-2 right-2 text-white hover:cursor-pointer" onClick={handleDelete} />
            </div>

        )
    }


    return (
        <>
            {
                bookmarkData.length === 0 ?

                    <div className="flex min-h-screen bg-[#10141E] text-white flex-col sm:flex-row">
                        {/* Sidebar */}
                        <Sidebar />
                        {/* Main content */}
                        <main className="flex-1  py-6 space-y-8 pt-10 px-5 sm:px-0 sm:pr-5">
                            <EmptyBookmark />
                        </main>
                    </div>
                    :
                    <div className="flex min-h-screen bg-[#10141E] text-white flex-col sm:flex-row">
                        {/* Sidebar */}
                        <Sidebar />
                        {/* Main content */}
                        <main className="flex-1  py-6 space-y-8 pt-10 px-5 sm:px-0 sm:pr-5">
                            {/* Search bar */}
                            <div className="flex items-center bg-transparent py-1">
                                <FaSearch className="text-white mr-3" />
                                <input
                                    onChange={(e) => setSearchResult(e.target.value)}
                                    type="text"
                                    placeholder="Search for movies or TV series"
                                    className="bg-transparent outline-none text-gray-600 placeholder-gray-600 w-full"
                                />
                            </div>

                            {/* Recommended section */}
                            <section>
                                <h2 className="text-lg font-semibold mb-4">
                                    {
                                        searchResult.length > 0 ? `Found ${resultData.length} Results` : 'Bookmark'
                                    }
                                </h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {resultData.map((item, index) => (
                                        <Card data={item} key={index} />
                                    ))}
                                </div>
                            </section>
                        </main>
                    </div>
            }


        </>
    );
};

export default BookmarkPage;
