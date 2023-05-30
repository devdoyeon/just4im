import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOfficialData } from 'js/api';
import ImageViewer from 'components/ImageViewer';
import Gnb from 'components/Gnb';
import Footer from 'components/Footer';
import { AiFillHome } from 'react-icons/ai';

const OfficialData = () => {
  const [dataArr, setDataArr] = useState([]);
  const [viewer, setViewer] = useState(false);
  const [img, setImg] = useState('');
  const [idx, setIdx] = useState('');
  let prevent = false;
  const navigate = useNavigate();

  const getData = async () => {
    if (prevent) return;
    prevent = true;
    setTimeout(() => {
      prevent = false;
    }, 200);
    const result = await getOfficialData();
    if (typeof result === 'object') {
      const arr = result?.data?.imageUrls;
      arr.shift();
      setDataArr(arr);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setImg(dataArr[idx]);
  }, [idx]);

  return (
    <>
      <div className='official-data content-wrap'>
        <Gnb />
        <div className='head row'>
          <div className='go-home' onClick={() => navigate('/')}>
            <AiFillHome />
          </div>
          <h3>OFFICIAL-PHOTO</h3>
        </div>
        <div className='row album'>
          {dataArr?.map((img, idx) => {
            return (
              <div
                className='image'
                onClick={() => {
                  setIdx(idx);
                  setViewer(true);
                }}>
                <img src={img} alt='ㅇ' />
              </div>
            );
          }, <></>)}
        </div>
      </div>
      <Footer />
      {viewer ? (
        <ImageViewer
          setViewer={setViewer}
          idx={idx}
          setIdx={setIdx}
          img={img}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default OfficialData;
