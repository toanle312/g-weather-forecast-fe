import './style.css';
const WeatherCard = ({ data, plain }) => {
  console.log(data);
  if (plain) {
    return (
      <div className='flex flex-col justify-between items-center p-3 rounded-xl shadow-custom'>
        <h2 className='font-[500] text-[16px]'>{`${data?.date}`}</h2>
        <img
          src={data?.condition.icon}
          alt='icon'
          className='size-16'
        />
        <div className='flex flex-col'>
          <p>{`Temp: ${data?.temp}`}&deg;C</p>
          <p>{`Wind: ${data?.wind} M/S`}</p>
          <p>{`Humidity: ${data?.humidity}%`} </p>
        </div>
      </div>
    );
  }
  return (
    <div className='flex items-center p-5 rounded-xl shadow-custom'>
      <div className='flex-[3] flex flex-col gap-1'>
        <h2 className='font-[500] text-[18px]'>{`${data?.location} (${data?.date})`}</h2>
        <div className='flex flex-col'>
          <p>{`Temperature: ${data?.temp}`}&deg;C</p>
          <p>{`Wind: ${data?.wind} M/S`}</p>
          <p>{`Humidity: ${data?.humidity}%`} </p>
        </div>
      </div>
      <div className='flex-1 flex flex-col justify-center items-center'>
        <img
          src={data?.condition.icon}
          alt='icon'
          className='icon size-16'
        />
        <p>{data?.condition.text}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
