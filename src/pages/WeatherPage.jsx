import { fetchWeatherData } from '@/apis';
import WeatherCard from '@/components/weatherCard/WeatherCard';
import WeatherList from '@/components/weatherList/WeatherList';
import { AppContext } from '@/context/AppContext';
import { useContext, useEffect, useState } from 'react';
import Loading from '../components/loading/Loading';
import WeatherNotFound from './CityNotFound';

const WeatherPage = () => {
  const { cityName, currentLocation } = useContext(AppContext);
  const [weatherData, setWeatherData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (cityName !== '') {
        setIsLoading(true);
        const data = await fetchWeatherData(cityName);
        setWeatherData(data);
        setIsLoading(false);
      }
    })();
  }, [cityName, currentLocation]);

  return (
    <div className='flex flex-col gap-2'>
      {isLoading || !currentLocation ? (
        <Loading />
      ) : weatherData && weatherData.error ? (
        <WeatherNotFound />
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
