const apiRoot =
  // eslint-disable-next-line no-undef
  process.env.BUILD_MODE === 'dev'
    ? 'http://localhost:3000'
    : 'https://g-weather-forecast-be.onrender.com/v1';

export const API_ROOT = apiRoot;
