import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Header from './PAGES/Header';
import Navbar from './PAGES/Navbar'
import Scheme from './PAGES/Scheme';
import Naga from './PAGES/Naga';
import { AnimatePresence } from "framer-motion";




function App() {
  return (
 <div>
  <Navbar />
  <AnimatePresence>
      <Router>
              <Routes>
                <Route path = "/" element={<Header/>}/> 
                <Route path = "/Scheme" element={<Scheme />}/> 
                <Route path = "/Naga" element={<Naga />}/> 
                <Route path = "*" element={"PAGE NOT FOUND"}/> 
                </Routes>
        </Router>
      </AnimatePresence>
 </div>
 
  );
}

export default App;
