import { useState } from 'react';
import WeatherCard from '../weatherCard/WeatherCard';

const WeatherList = ({ weatherData }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  return (
    <div className='flex flex-col'>
      <h1 className='font-[600] text-[42px]'>Daily</h1>
      <div className='flex gap-[1%] flex-wrap p-5 overflow-auto max-h-[260px] no-scroll-bar relative'>
        {weatherData?.four_futures?.map((data) => (
          <div
            key={data.date}
            className='max-xl:basis-[32%] max-lg:basis-[49%] max-sm:basis-[100%] basis-[24%] mb-[2%]'
          >
            <WeatherCard
              data={data}
              plain
            />
          </div>
        ))}
        {isShowMore ? (
          <>
            {weatherData?.rest_futures?.map((data) => (
              <div
                key={data.date}
                className='max-xl:basis-[32%] max-lg:basis-[49%] max-sm:basis-[100%] basis-[24%] mb-[2%]'
              >
                <WeatherCard
                  data={data}
                  plain
                />
              </div>
            ))}
            <button
              className='flex-1 hover:text-[#379DF1]'
              onClick={() => setIsShowMore((prev) => !prev)}
            >
              Hide
            </button>
          </>
        ) : (
          <button
            className='flex-1 hover:text-[#379DF1]'
            onClick={() => setIsShowMore((prev) => !prev)}
          >
            Show More ...
          </button>
        )}
      </div>
    </div>
  );
};

export default WeatherList;
