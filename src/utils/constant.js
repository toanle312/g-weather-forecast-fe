/* eslint-disable no-undef */
const apiRoot =
  process.env.BUILD_MODE === 'dev'
    ? import.meta.env.VITE_LOCAL_API_ROOT
    : import.meta.env.VITE_API_ROOT;

export const API_ROOT = apiRoot;
