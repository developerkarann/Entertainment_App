import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/homePage'
import Sidebar from './components/Sidebar'
import MoviesPage from './pages/movies/moviesPage'
import SeriesPage from './pages/series/seriesPage'
import BookmarkPage from './pages/bookmark/bookmarkPage'
import LoginPage from './pages/login/loginPage'
import SignUpPage from './pages/signup/signupPage'
import MovieDetails from './pages/movieDetails/movieDetails'
import SeriesDetails from './pages/seriesDetails/seriesDetails'
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
      </BrowserRouter>

    </>
  )
}

export default App
