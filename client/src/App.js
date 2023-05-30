import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';
import OfficialData from 'pages/OfficialData';
import PhotoShoot from 'pages/PhotoShoot';
import PS from 'pages/PS';
import logo from 'images/WhiteLogo.svg';
import 'swiper/swiper-bundle.css';

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      window.scrollTo(0, 0);
    }, 3000);
  }, []);

  return (
    <div className='App'>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/official-data' element={<OfficialData />} />
          <Route path='/photo-shoot' element={<PhotoShoot />} />
          <Route path='/ps' element={<PS />} />
        </Routes>
        <div className={`load column ${load ? 'active' : ''}`}>
          <img src={logo} alt='로고' />
        </div>
      </div>
    </div>
  );
}

export default App;
