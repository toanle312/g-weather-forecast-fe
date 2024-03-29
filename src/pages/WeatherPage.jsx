import { fetchWeatherData } from '@/api';
import WeatherCard from '@/components/weatherCard/WeatherCard';
import WeatherList from '@/components/weatherList/WeatherList';
import { AppContext } from '@/context/AppContext';
import { useContext, useEffect, useState } from 'react';
import Loading from './loading/Loading';

const WeatherPage = () => {
  const { cityName, currentLocation } = useContext(AppContext);
  const [weatherData, setWeatherData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await fetchWeatherData(cityName);
      setIsLoading(false);
      setWeatherData(data);
    })();
  }, [cityName, currentLocation]);

  return (
    <div className='flex flex-col gap-2'>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className='flex flex-col'>
            <h1 className='font-[600] text-[42px]'>Today</h1>

            <WeatherCard data={weatherData?.current} />
          </div>

          <WeatherList
            weatherData={weatherData}
            isLoading={isLoading}
          />
        </>
      )}
    </div>
  );
};

export default WeatherPage;
