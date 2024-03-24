import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Welcome from './pages/Welcome'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/home'

function App() {

  return (

    <Router>
      
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </Router>
  )
}

export default App
