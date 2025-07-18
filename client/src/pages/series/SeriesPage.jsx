import { FaBookmark, FaSearch } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeries } from "../../redux/slices/seriesSlice";

const SeriesPage = () => {


    const series = useSelector((state) => state.series.data)
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch()

    const [searchResult, setSearchResult] = useState('')

    

    useEffect(() => {
       dispatch(fetchSeries(token))
    }, [])


    const resultData = series.filter((item) => (
        item.title.toLowerCase().includes(searchResult.toLowerCase())
    ))


    return (
        <>
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
                                searchResult.length > 0 ? `Found ${resultData.length} results for TV Series` : 'TV Series'
                            }
                        </h2>
                        {resultData.length === 0 ? <Loader /> :
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {resultData.map((item, index) => (
                                    <Card data={item} key={index} />
                                ))}
                            </div>}
                    </section>
                </main>
            </div>


        </>
    );
};

export default SeriesPage;
