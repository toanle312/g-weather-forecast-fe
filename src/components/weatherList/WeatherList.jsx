import WeatherCard from '../weatherCard/WeatherCard';

const WeatherList = ({ weatherData }) => {
  return (
    <div className='flex flex-col'>
      <h1 className='font-[600] text-[42px]'>Daily</h1>
      <div className='flex gap-[1%] flex-wrap p-5 overflow-auto max-h-[230px] no-scroll-bar relative'>
        {weatherData?.four_futures.map((data) => (
          <div
            key={data.date}
            className='basis-[24%] mb-[2%]'
          >
            <WeatherCard
              data={data}
              plain
            />
          </div>
        ))}
        {weatherData?.rest_futures.map((data) => (
          <div
            key={data.date}
            className='basis-[24%] mb-[2%]'
          >
            <WeatherCard
              data={data}
              plain
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherList;
