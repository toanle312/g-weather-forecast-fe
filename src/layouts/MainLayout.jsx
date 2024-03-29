import Search from '@/components/search/Search';
import Detail from '@/components/detail/Detail';

function MainLayout() {
  return (
    <div className='min-h-[100vh] max-w-[1200px] flex m-auto items-center'>
      <div className='w-full m-auto shadow-lg rounded-[50px] bg-white'>
        <div className='flex'>
          <div className='flex-1'>
            <Search />
          </div>
          <div className=' flex-[1.6]'>
            <Detail />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
