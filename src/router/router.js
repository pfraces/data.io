import { createBrowserRouter } from 'react-router-dom';
import AppLayout from 'src/AppLayout/AppLayout';

const routes = [
  {
    path: '/',
    element: <AppLayout />,
  },
];

export const router = createBrowserRouter(routes);
