import { format } from '@/utils/formatter';
import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

const AppProvier = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [cityName, setCityName] = useState('');

  const changeLocation = (value) => {
    setCurrentLocation(value);
  };

  const changeCityName = (value) => {
    setCityName(value);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`;

      fetch(geoApiUrl)
        .then((res) => res.json())
        .then((location) => {
          changeLocation(location.city);
          changeCityName(format(location.city));
        });
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentLocation,
        changeLocation,
        cityName,
        changeCityName,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvier;
