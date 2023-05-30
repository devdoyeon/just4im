import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
import Gnb from 'components/Gnb';
import { getSelfie, getAlbumCover } from 'js/api';
// IMAGE
import logo from 'images/WhiteLogo.svg';
import scrollDownIcon from 'images/scrollDown.svg';
import profileImg from 'images/profileImg.jpg';
import Footer from 'components/Footer';

const Main = () => {
  const [selfieArr, setSelfieArr] = useState([]);
  const [albumCoverArr, setAlbumCoverArr] = useState([]);
  const albumDescription = [
    { album: 'SINGLE / 참여 앨범', title: 'Flower Cafe', date: '2015.11.11' },
    { album: 'SINGLE', title: '마들렌', date: '2016.10.20' },
    { album: 'SINGLE', title: 'Need To Know', date: '2020.05.08' },
    { album: 'EP', title: 'DUALITY', date: '2021.02.19' },
    { album: 'SINGLE', title: 'Loop', date: '2021.09.04' },
    { album: 'Album / 참여 앨범', title: 'Undo', date: '2022.06.30' },
    {
      album: 'Album / 참여 앨범',
      title: 'SOULBYSEL Compilation 03',
      date: '2022.11.07',
    },
  ];

  const navigate = useNavigate();

  let prevent = false;

  SwiperCore.use([Pagination, Autoplay, Navigation]);

  const getSelfiesAPI = async () => {
    const result = await getSelfie();
    if (typeof result === 'object') {
      const arr = [...result?.data?.imageUrls];
      arr.shift();
      setSelfieArr(arr);
    } else return;
  };

  const getAlbumCoversAPI = async () => {
    if (prevent) return;
    prevent = true;
    setTimeout(() => {
      prevent = false;
    }, 100);
    const result = await getAlbumCover();
    if (typeof result === 'object') {
      const arr = [...result?.data?.imageUrls];
      arr.shift();
      setAlbumCoverArr(arr);
      getSelfiesAPI();
    } else return;
  };

  useEffect(() => {
    getAlbumCoversAPI();
  }, []);

  return (
    <>
      <div className='main-wrap column'>
        <div className='main-content column'>
          <img src={logo} alt='로고' />
        </div>
        <Gnb />
        <img
          src={scrollDownIcon}
          alt='스크롤 다운 아이콘'
          className='scroll-down-icon'
        />
        <div className='content'>
          <div className='wrapper main-wrapper'>
            <Swiper
              className='main-swiper'
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              speed={3000}
              modules={[Autoplay]}
              centeredSlides={true}
              allowTouchMove={false}>
              {selfieArr?.map((img, idx) => {
                return (
                  <SwiperSlide>
                    <img src={img} alt={`I.M Selfie${idx + 1}`} />
                  </SwiperSlide>
                );
              }, <></>)}
            </Swiper>
          </div>
          <h1 className='profile-header'>Profile</h1>
          <div className='wrapper profile-wrapper row'>
            <img src={profileImg} alt='프로필' />
            <h1 className='main-name'>I.M</h1>
            <ul className='description'>
              <li>임창균</li>
              <li>Im Changkyun</li>
              <li>1996.01.26</li>
              <li>175cm / 63kg</li>
              <li>Rh+ O</li>
              <li>Rapper of MONSTA X</li>
              <li>Sony Music Entertainment Korea Inc.</li>
            </ul>
          </div>
          <h1 className='discography-header'>Discography</h1>
          <div className='wrapper discography-wrapper'>
            <Swiper
              className='discography-swiper'
              loop={true}
              loopedSlides={5}
              initialSlide={4}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              speed={2000}
              modules={[Autoplay]}
              slidesPerView={'auto'}
              observer={true}
              observeParents={true}
              spaceBetween={50}>
              {albumCoverArr?.map((img, idx) => {
                return (
                  <SwiperSlide>
                    <div className='column'>
                      <img src={img} alt='albumCover' />
                      <p>{albumDescription[idx].album}</p>
                      <h3>{albumDescription[idx].title}</h3>
                      <h5>{albumDescription[idx].date}</h5>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className='column more-contents'>
            <h3>MORE CONTENTS</h3>
            <div className='row btn-wrap'>
              <button onClick={() => navigate('/official-data')}>OFFICIAL DATA</button>
              <button onClick={() => navigate('/ps')}>P.S.</button>
              <button onClick={() => navigate('/photo-shoot')}>
                PHOTOSHOOT
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
