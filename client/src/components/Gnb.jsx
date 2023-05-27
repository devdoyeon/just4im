import $ from 'jquery';
import { useState, useEffect } from 'react';
import logo from 'images/WhiteLogo.svg';

const Gnb = () => {
  const [gnb, setGnb] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const scrollYFn = async () => {
    const scrollYHandler = () => setScrollY(window.pageYOffset);
    const watch = () => window.addEventListener('scroll', scrollYHandler);
    watch();
    return () => window.removeEventListener('scroll', scrollYHandler);
  };

  useEffect(() => {
    if (scrollY > 500) setGnb(true);
    if (scrollY > 800) $('.main-name').addClass('animate');
    else setGnb(false);
  }, [scrollY]);

  useEffect(() => {
    scrollYFn()
  }, [])

  return (
    <div className={`gnb row ${gnb ? 'active' : ''}`}>
      <img src={logo} alt='로고' />
    </div>
  );
};

export default Gnb;
