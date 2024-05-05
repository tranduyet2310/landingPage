import './App.css'
import About from './components/About'
import Download from './components/Download'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Preloader from './components/PreLoader'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

import ListEmployeeComponent from './components/ListEmployeeComponent'


function App() {

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Pricing/>
      <Testimonials/>
      <Download/>
      <Footer/>
      <Preloader/>
    </>
  )
}

export default App
