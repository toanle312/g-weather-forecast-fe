import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import SubcribePage from './pages/SubcribePage.jsx';
import UnsubcribePage from './pages/UnsubcribePage.jsx';
import WeatherPage from './pages/WeatherPage';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        index: true,
        path: '/',
        element: (
          <Navigate
            to='/weather'
            replace
          />
        ),
      },
      {
        path: '/weather',
        element: <WeatherPage />,
      },
      {
        path: '/subcribe',
        element: <SubcribePage />,
      },
      {
        path: '/unsubcribe',
        element: <UnsubcribePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
