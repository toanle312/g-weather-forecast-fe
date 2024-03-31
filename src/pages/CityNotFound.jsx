const WeatherNotFound = () => {
  return (
    <div className='flex h-[500px] w-full'>
      <div className='m-auto'>
        <h1 className='text-[24px] font-bold'>
          Could not found any weather information for your city
        </h1>
      </div>
    </div>
  );
};

export default WeatherNotFound;
