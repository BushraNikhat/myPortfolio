import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import { CssBaseline } from '@material-ui/core';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
    <Header/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    <Navbar/>
    
    <CssBaseline />
    </>
  )
}

export default App
