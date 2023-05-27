import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';
import Jacket from 'pages/Jacket';
import PhotoShoot from 'pages/PhotoShoot';
import PS from 'pages/PS';
import 'swiper/css/bundle';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/jacket' element={<Jacket />} />
          <Route path='/photo-shoot' element={<PhotoShoot />} />
          <Route path='/ps' element={<PS />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
