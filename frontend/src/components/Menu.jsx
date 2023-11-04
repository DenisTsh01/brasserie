import React, { useEffect, useState } from 'react';
import { motion, useScroll } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import './Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Main from './Main';
import Extras from './Extras';
import MainDrinks from './MainDrinks.jsx';


function Menu() {
  const { scrollYProgress } = useScroll();

  const [drinking, setDrinks]= React.useState([]);
  const [bieres_bouteiless, setBieresBouteiless]= React.useState([]);
  const [sodas, setSodas]= React.useState([]);
  const [minerals, setMinerals]= React.useState([]);
  const [alcools, setAlcools]= React.useState([]);
  const [aperities, setAperities]= React.useState([]);
  const [vins, setVins]= React.useState([]);
  const [boissons_chaudes, setBoissonsChaudes]= React.useState([]);
  const [liqueurs, setLiqueus]= React.useState([]);
  const [dessert, setDesserts] = useState([]);
  const [entree, setEntree] = useState([]);
  const [pates, setPates] = useState([]);
  const [plat, setPlat] = useState([]);
 
  const [menuTitle, setMenuTitle] = useState('');
  const [selectedMenu, setSelectedMenu] = useState('Meal'); 

  useEffect(() => {
    // Apelează funcțiile pentru a obține datele
    getDessert();
    getEntree();
    getPates();
    getPlat();
    
  }, []);

  useEffect(() => {
    getBieresPression();
    getBieresBouteiless();
    getAlcools();
    getAperities();
    getBoissonsChaudes();
    getLiqueurs();
    getSodas();
    getMinerals()
    getVins();

  }, []);
  useEffect(() => {
    console.log("Starea drinking a fost actualizată:", drinking);
  }, [drinking]);

  async function getBieresPression() {
    let response = await fetch('/api/bieres_pression/');
    let data2 = await response.json();    
    console.log(data2)
    setDrinks(data2); 
  }
  async function getBieresBouteiless() {
    let response = await fetch('/api/bieres_bouteiless/');
    let data2 = await response.json();    
    console.log(data2)
    setBieresBouteiless(data2); 
  }
  async function getSodas() {
    let response = await fetch('/api/sodas/');
    let data2 = await response.json();    
    console.log(data2)
    setSodas(data2); 
  }
  async function getMinerals() {
    let response = await fetch('/api/minerals/');
    let data2 = await response.json();    
    console.log(data2)
    setMinerals(data2); 
  }
  async function getAlcools() {
    let response = await fetch('/api/alcools/');
    let data2 = await response.json();    
    console.log(data2)
    setAlcools(data2); 
  }
  async function getAperities() {
    let response = await fetch('/api/aperities/');
    let data2 = await response.json();    
    console.log(data2)
    setAperities(data2); 
  }
  async function getVins() {
    let response = await fetch('/api/vins/');
    let data2 = await response.json();    
    console.log(data2)
    setVins(data2); 
  }
  async function getBoissonsChaudes() {
    let response = await fetch('/api/boissons_chaudes/');
    let data2 = await response.json();    
    console.log(data2)
    setBoissonsChaudes(data2); 
  }
  async function getLiqueurs() {
    let response = await fetch('/api/liqueurs/');
    let data2 = await response.json();    
    console.log(data2)
    setLiqueus(data2); 
  }


  useEffect(() => {
    // După ce datele au fost setate, apelează funcția getTime
    if (dessert.length > 0 || entree.length > 0 || pates.length > 0 || plat.length > 0) {
      getTime();
    }
  }, [dessert, entree, pates, plat]);

  async function getTime() {
    const sections = [dessert, pates, entree, plat];

    for (const section of sections) {
      if (section.length > 0) {
        const data = section[0];
        if (data != null) {
          const formattedDate = await getDate(data);
          setMenuTitle(formattedDate);
          break;
        }
      }
    }
  }

  async function getDate(item) {
    if (!item) {
      return '';
    }
    const date = item.today;
    if (date) {
      const dateObj = new Date(date);
      const options = { day: 'numeric', month: 'long' };
      return dateObj.toLocaleDateString('fr-FR', options);
    } else {
      return '2';
    }
  }

  async function getDessert() {
    let response = await fetch('/api/dessert/');
    let data = await response.json();
    setDesserts(data);
  }

  async function getEntree() {
    let response = await fetch('/api/entree/');
    let data = await response.json();
    setEntree(data);
  
  }
  

  async function getPates() {
    let response = await fetch('/api/pates/');
    let data = await response.json();
    setPates(data);
  }

  async function getPlat() {
    let response = await fetch('/api/plat/');
    let data = await response.json();
    setPlat(data);
  }

  const [inView, setInView] = useState(true);
  const handleMenuToggle = () => {
    if (selectedMenu === 'Drinks') {
      // Dacă sunteți deja în meniul "Drinks", treceți înapoi la meniul principal
      setSelectedMenu('Meal'); // sau oricare altă categorie principală doriți să fie afișată inițial
    } else {
      // Altfel, comutați la meniul "Drinks"
      setSelectedMenu('Drinks');
    }
    setInView(false);
    setTimeout(() => {
      setInView(true);
    }, 200); // Ajustează durata în funcție de nevoile tale
  };


    const [ref3, inView3] = useInView({
      triggerOnce: false, // Pentru a anima elementul doar o dată când devine vizibil
    });
    const [ref2, inView2] = useInView({
      triggerOnce: false, // Pentru a anima elementul doar o dată când devine vizibil
    });
    
    const [ref5, inView5] = useInView({
      triggerOnce: false, // Pentru a anima elementul doar o dată când devine vizibil
    });
    const [ref4, inView4] = useInView({
      triggerOnce: false, // Pentru a anima elementul doar o dată când devine vizibil
    });
    const [refLeft, inViewLeft] = useInView({
      triggerOnce: false,
    });
    const [refRight, inViewRight] = useInView({
      triggerOnce: false,
    });

  return (<div
    >

    {selectedMenu === 'Meal' ? (

     <div className="menu">

       <h2>Menu - {menuTitle}</h2>
       <div className='menu-item'>
         <span></span>
         <div className='changer' onClick={handleMenuToggle}>
         Drinks Menu
       </div>
         </div>

         <motion.div
          ref={ref2}
          initial={{ x: -50, opacity: 0 }}
          animate={ inView2 ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          >
         <Main type="Entree" meals={entree} />

         </motion.div>

         <aside className="aside">
          <motion.div
          ref={ref3}
          initial={{ x: +30, opacity: 0 }}
          animate={inView3 ? { x: 0, opacity: 1 } : { x: +30, opacity: 0 }}
          transition={{ duration: 1 }}
          >
           <Main type="Plat" meals={plat} />
           </motion.div>
         </aside>
         <motion.div
          ref={ref4}
          initial={{ x: -50, opacity: 0 }}
          animate={inView4 ? { x: 0, opacity: 1 } : { x:-50, opacity: 0 }}
          transition={{ duration: 1 }}
          >
         <Main type="Pates" meals={pates} />
         </motion.div>
         <aside className="aside">
         <motion.div
          ref={ref5}
          initial={{ x: +30, opacity: 0 }}
          animate={inView5 ? { x: 0, opacity: 1 } : { x: +30, opacity: 0 }}
          transition={{ duration: 1 }}
          >
           <Main type="Dessert" meals={dessert} />
           </motion.div>
         </aside>
     </div>
    ):(

    <div className="menu">

       <h2 >Drinks</h2>
       <div className='menu-item'>
         <span></span>
         <div className='changer' onClick={handleMenuToggle}>
         Meal Menu
       </div>
         </div>
         
         <div className='left'>
         <motion.div
          ref={refLeft}
          initial={{ x: -50, opacity: 0 }}
          animate={ inViewLeft ?   { x: 0, opacity: 1 }: { x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          >

          
         
         <MainDrinks type="Bieres Pression"  drinks={drinking} />
         <MainDrinks type="Bieres Bouteiless"  drinks={bieres_bouteiless} />
         <MainDrinks type="Jus de Fruits et Sodas"  drinks={sodas} />
         <MainDrinks type="Eaux Minerales & Sirops"  drinks={minerals} />

         </motion.div>
         </div>


         <aside className="aside">

          <div className='right'>
          <motion.div
          ref={refRight}
          initial={{ x: +50, opacity: 0 }}
          animate={inViewRight ? { x: 0, opacity: 1 } : { x: +50, opacity: 0 }}
          transition={{ duration: 1 }}
>
         <MainDrinks type="Alcools"  drinks={alcools} />
         <MainDrinks type="Aperities"  drinks={aperities} />
         <MainDrinks type="Vins"  drinks={vins} />
         <MainDrinks type="Boissons Chaudes"  drinks={boissons_chaudes} />
         <MainDrinks type="Liqueurs & Digesties"  drinks={liqueurs} />

           
           </motion.div>
           </div>

         </aside>
        
         
     </div>
    )}

   </div>
  );
} 

export default Menu;