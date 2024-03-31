import { fetchWeatherData } from '@/apis';
import WeatherCard from '@/components/weatherCard/WeatherCard';
import WeatherList from '@/components/weatherList/WeatherList';
import { AppContext } from '@/context/AppContext';
import { useContext, useEffect, useState } from 'react';
import Loading from '../components/loading/Loading';
import WeatherNotFound from './CityNotFound';
import { format } from '@/utils/formatter';

const WeatherPage = () => {
  const { cityName, currentLocation } = useContext(AppContext);
  const [weatherData, setWeatherData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      // If city name is different from current location name => fetch new information data
      if (cityName !== '' && cityName !== format(currentLocation)) {
        setIsLoading(true);
        const data = await fetchWeatherData(cityName);
        setWeatherData(data);
        setIsLoading(false);
      } else if (cityName === format(currentLocation)) {
        // if exist temp data for current location, and date is unexpired => Do not need to fetch data again
        const temp_data = JSON.parse(localStorage.getItem('temp_data'));
        if (
          temp_data &&
          new Date(temp_data.date).toDateString() === new Date().toDateString()
        ) {
          setWeatherData(temp_data);
        } else {
          // Fetch new data and store as temp_data for current location
          setIsLoading(true);
          const data = await fetchWeatherData(cityName);
          setWeatherData(data);
          setIsLoading(false);
          localStorage.setItem(
            'temp_data',
            JSON.stringify({
              ...data,
              date: new Date(),
            })
          );
        }
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
