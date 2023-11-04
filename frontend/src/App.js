import { HashRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home'

function App() {
  return (
    <Router>
      
        

        <Routes> {/* Utilizează <Routes> în loc de <Route> */}
          <Route path="/" exact element={<Home />} /> {/* Folosește 'element' în loc de 'component' */}
         
        </Routes>
    
    </Router>
  );
}
export default App;
