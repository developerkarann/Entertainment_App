import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";

const LoginPage = () => {
  const dispatch = useDispatch()


  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value
    const password = e.target.password.value
    try {
      const result = await dispatch(loginUser({ email, password })).unwrap();
      toast.success('Logged In!')
    } catch (error) {
      console.log('[UI] Login Error ❌', error);
      toast.error(error)
    }

  }


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#10141E] text-white px-4">
      {/* Logo */}
      <div className="mb-8">
        <Link to='/'>
          <div className="w-10 h-10 bg-[#FC4747] rounded-sm"></div>
        </Link>

      </div>

      {/* Login Card */}
      <div className="bg-[#161D2F] rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-light mb-6">Login</h2>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full bg-transparent border-b border-gray-500 outline-none py-2 placeholder-gray-400 text-sm"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full bg-transparent border-b border-gray-500 outline-none py-2 placeholder-gray-400 text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-[#FC4747] hover:bg-[#ff6161] text-white py-3 rounded-md text-sm"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link to='/signup'>
            <span className="text-[#FC4747] hover:underline cursor-pointer">
              Sign Up
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
