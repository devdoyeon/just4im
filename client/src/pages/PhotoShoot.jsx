import { useNavigate } from 'react-router-dom';
import Gnb from 'components/Gnb';
import { AiFillHome } from 'react-icons/ai';

const PhotoShoot = () => {
  const navigate = useNavigate();

  return (
    <div className='photoShoot content-wrap'>
      <Gnb />
      <div className='head row'>
        <div className='go-home' onClick={() => navigate('/')}>
          <AiFillHome />
        </div>
        <h3>PHOTO-SHOOT</h3>
      </div>
    </div>
  );
};

export default PhotoShoot;
