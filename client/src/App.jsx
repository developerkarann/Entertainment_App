import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import HomePage from './pages/home/HomePage'
import Sidebar from './components/Sidebar'
import MoviesPage from './pages/movies/MoviesPage'
import SeriesPage from './pages/series/SeriesPage'
import BookmarkPage from './pages/bookmark/BookmarkPage'
import LoginPage from './pages/login/LoginPage'
import SignUpPage from './pages/signup/SignupPage'
import MovieDetails from './pages/movieDetails/MovieDetails'
import SeriesDetails from './pages/seriesDetails/SeriesDetails'
import ProtectedRoute from './components/ProtectedRoute'
import ProtectedLogin from './components/ProtectedLogin'

function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path='/movies' element={<ProtectedRoute><MoviesPage /></ProtectedRoute>} />
          <Route path='/movie/:id' element={<ProtectedRoute><MovieDetails /></ProtectedRoute>} />
          <Route path='/series/:id' element={<ProtectedLogin><SeriesDetails /></ProtectedLogin>} />
          <Route path='/series' element={<ProtectedRoute><SeriesPage /></ProtectedRoute>} />
          <Route path='/bookmark' element={<ProtectedRoute><BookmarkPage /></ProtectedRoute>} />
          <Route path='/login' element={<ProtectedLogin><LoginPage /></ProtectedLogin>} />
          <Route path='/signup' element={<ProtectedLogin><SignUpPage /></ProtectedLogin>} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="light"
        />

      </BrowserRouter>

    </>
  )
}

export default App
