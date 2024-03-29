const SubcribePage = () => {
  return (
    <div className='w-full h-[400px] flex flex-col justify-center items-center gap-10'>
      <h1 className='font-bold text-[18px]'>
        Enter your email to receive daily weather forecast information
      </h1>
      <input
        type='text'
        className='w-[400px] p-5 rounded-md border-solid border-[2px] border-gray-300'
      />
      <button className='w-[400px] p-5 rounded-md bg-green-500 text-white font-bold'>
        Subcribe
      </button>
    </div>
  );
};

export default SubcribePage;
