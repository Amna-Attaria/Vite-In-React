import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Navbar from './componenets/Navbar.jsx'
import Header from './componenets/header.jsx'
import FirstSection from './componenets/FirstSection.jsx'
import Footer from './componenets/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <Navbar />
      <Header />
      <FirstSection />
      <FirstSection />
      <Header />
     <Footer />
    </div>
 

  </StrictMode>,
)
