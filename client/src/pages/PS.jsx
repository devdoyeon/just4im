import { useNavigate } from 'react-router-dom';
import Gnb from 'components/Gnb';
import { AiFillHome } from 'react-icons/ai';

const PS = () => {
  const navigate = useNavigate();

  return (
    <div className='ps content-wrap'>
      <Gnb />
      <div className='head row'>
        <div className='go-home' onClick={() => navigate('/')}>
          <AiFillHome />
        </div>
        <h3>P.S.</h3>
      </div>
      <div className='content-box'>
        
      </div>
    </div>
  );
};

export default PS;
