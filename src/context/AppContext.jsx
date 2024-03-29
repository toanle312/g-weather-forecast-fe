import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

const AppProvier = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState(
    () => localStorage.getItem('currentLocation') || ''
  );
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
          localStorage.setItem('currentLocation', location.city);
          changeLocation(location.city);
          changeCityName(location.city);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvier;
