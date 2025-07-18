import { FaSpinner } from "react-icons/fa";

const Loader = () => {
    return (
        <>
            <div className="bg-[#10141E] text-white min-h-screen flex items-center justify-center">
                <FaSpinner className="animate-spin text-7xl text-blue-900" />
            </div>
        </>
    )
}

export default Loader