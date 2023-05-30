import $ from 'jquery';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from 'images/WhiteLogo.svg';

const Gnb = () => {
  const [gnb, setGnb] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  const scrollYFn = async () => {
    const scrollYHandler = () => setScrollY(window.pageYOffset);
    const watch = () => window.addEventListener('scroll', scrollYHandler);
    watch();
    return () => window.removeEventListener('scroll', scrollYHandler);
  };

  useEffect(() => {
    if (scrollY > 300) {
      $('.main-name').addClass('animate');
      setGnb(true);
    } else {
      $('.main-name').removeClass('animate');
      setGnb(false);
    }
  }, [scrollY]);

  useEffect(() => {
    scrollYFn();
  }, []);

  return (
    <div className={`gnb row ${gnb ? 'active' : ''}`}>
      <img src={logo} alt='로고' onClick={() => navigate('/')} />
    </div>
  );
};

export default Gnb;
