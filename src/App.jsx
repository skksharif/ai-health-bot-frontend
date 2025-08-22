import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Hero from './pages/Hero'

function App() {

  return (
    <>
       <BrowserRouter>
          <Navbar/>
          <Hero/>
       </BrowserRouter>
    </>
  )
}

export default App
