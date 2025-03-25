import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/pages/header';
import Footer from './components/pages/footer';
import Main from './components/pages/main';
import Avtosalon from './components/pages/avtosalon';
import Lk from './components/pages/lk';
import Korzina from './components/pages/korzina';
import Test_drive from './components/pages/test_drive';
import Model from './components/pages/model';
import View from './components/pages/view';
import Accessory from './components/pages/accessory';
import Configurator from './components/pages/configurate';

function App() {
  return (
    <Router>
          <Header />
          {/* <Main /> */} 
              <Routes>
                <Route path='/' element={<Main />} exact />
                <Route path='/model' element={<Model />} />
                <Route path='/view/:Model' element={<View />} />
                <Route path='/accessory' element={<Accessory />} />
                <Route path='/configurate/:id' element={<Configurator />} />
                <Route path='/avtosalon' element={<Avtosalon />} />
                <Route path='/lk/:id' element={<Lk />} />
                <Route path='/korzina/:id' element={<Korzina />} />
                <Route path='/test-drive' element={<Test_drive />} />
              </Routes>
          <Footer />
        
    </Router>
    
  );
}

export default App;