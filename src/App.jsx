import './App.css'
import Header from "./components/Layout/Header"
import Footer from './components/Footer/Footer'
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Choose from './components/Choose/Choose'
import Vegetables from './components/Vegetables/Vegetables'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'


function App() {

  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <Vegetables />
        <Choose />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
