import loading from '@/assets/loading.png';
import './loading.css';
const Loading = () => {
  return (
    <div className='flex h-[500px] w-full'>
      <div className='m-auto'>
        <img
          src={loading}
          alt='loading'
          className='loadingImage size-6'
        />
      </div>
    </div>
  );
};

export default Loading;
