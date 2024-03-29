import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Welcome from './pages/Welcome'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/home'
import MassoTerapia from './pages/service/Masso_terapia'
import Osteopatia from './pages/service/Osteopatia'
import FisioTerapia from './pages/service/Fisio_terapia'

function App() {
  return (

    <Router >
      <Welcome/>
    <Routes >
      {/*<Route path='/' element={<Welcome/>}/>*/}
      {/* <Route path='/Home' element={<Home/>}/> */}
      {/* <Route path="*" element={<ErrorPage />} /> */}
      {/*list of service */}
      {/* <Route path='/fisioTerapia' element={<FisioTerapia/>}/>
      <Route path='/massoTerapia' element={<MassoTerapia/>}/>
      <Route path='/osteopatia' element={<Osteopatia/>}/> */}
      {/* ***** */}
    </Routes>
    </Router>
  )
}

export default App
