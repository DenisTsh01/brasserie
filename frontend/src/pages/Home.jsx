import '../App.css';
// import HeroSection from '../components/HeroSection';
import Menu from '../components/Menu'
import { Element } from 'react-scroll';
import './Home.css'
// import Contact from '../components/Contact';
import EventList from '../components/EventList';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Contact from '../components/Contact'
function Home() {
  return (

<>

   
     
       
<Navbar/>

      <Element name="section0" className="element1">
        <Hero /> 
      </Element>

      <Element name="section1" className="element1">
        <Menu /> 
      </Element>

      <Element name="section2" className="element1">
       <EventList />  
      </Element>
      
     <Element name="section3" className="element1">
       <Contact/>
      </Element>
     
    </>
  );
}
export default Home;