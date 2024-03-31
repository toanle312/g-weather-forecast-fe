import { useContext, useState } from 'react';

import weather from '@/assets/weather.jpg';
import gps from '@/assets/gps.png';
import search from '@/assets/search.png';
import location from '@/assets/location.png';
import { AppContext } from '@/context/AppContext';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const { changeCityName, currentLocation, changeLocation } =
    useContext(AppContext);

  const handleSearch = () => {
    changeCityName(searchValue);
    setSearchValue('');
  };

  const handleGetCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`;

      fetch(geoApiUrl)
        .then((res) => res.json())
        .then((location) => {
          changeLocation(location.city);
          changeCityName(location.city);
        });
    });
  };

  return (
    <div className='flex flex-col h-[660px] relative'>
      <img
        src={weather}
        alt='weather-image'
        className='h-[100%] brightness-90 rounded-[50px] '
      />
      <div className='absolute p-10 text-white left-0 right-0 h-full flex flex-col justify-between'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center text-[24px] font-[400] drop-shadow-xl bg-black/20 rounded-[14px] py-2'>
            <img
              src={location}
              alt='search'
              className='size-6 mx-4'
            />
            {currentLocation !== '' ? (
              <div className='flex flex-col justify-center pr-4'>
                <span className='text-[12px]'>Current location</span>
                <span className='text-[18px] font-bold'>{currentLocation}</span>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className='flex flex-col gap-10 justify-center items-center min-h-[100%] pb-[100px]'>
          <span className='text-[32px] leading-4'>G Weather Forecast</span>
          <div className='w-[150px] h-2 bg-white rounded-full'></div>
          <div className='flex justify-between items-center gap-2'>
            <input
              type='text'
              className='p-2 rounded-[5px] text-white outline-none border-none w-[250px] backdrop-blur-[2px] bg-white/30'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <button
              className='text-[18px] p-2 rounded-[5px] bg-white/20'
              onClick={handleSearch}
              disabled={searchValue === ''}
            >
              <img
                src={search}
                alt='search'
                className='size-6'
              />
            </button>
            <button
              className='text-[18px] p-2 rounded-[5px] bg-white/20'
              onClick={handleGetCurrentLocation}
            >
              <img
                src={gps}
                alt='gps'
                className='size-6'
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
