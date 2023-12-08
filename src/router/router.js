import { createBrowserRouter } from 'react-router-dom';
import AppLayout from 'src/AppLayout/AppLayout';
import Landing from 'src/views/Landing/Landing';
import Signup from 'src/views/Signup/Signup';
import Login from 'src/views/Login/Login';
import Home from 'src/views/Home/Home';
import Profile from 'src/views/Profile/Profile';

const routes = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
