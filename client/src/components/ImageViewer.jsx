import { MdOutlineFullscreenExit } from 'react-icons/md';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

const ImageViewer = ({ img, idx, setIdx, setViewer }) => {
  return (
    <div className='viewer-bg'>
      <button onClick={() => setViewer(false)} className='exitBtn'>
        <MdOutlineFullscreenExit />
      </button>
      <img src={img} alt='이미지 크게 보기' />
      <div className='row btn-wrap'>
        <div
          onClick={() => {
            if (idx === 0) return;
            else setIdx(idx - 1);
          }}
          className='prevBtn'>
          <GrLinkPrevious />
        </div>
        <div onClick={() => setIdx(idx + 1)} className='nextBtn'>
          <GrLinkNext />
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
