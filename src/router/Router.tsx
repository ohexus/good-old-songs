import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Artist, ErrorPage, Favorite, Home, NotFound, Root } from '../pages';
import RoutePaths from './RoutePaths';

const router = createBrowserRouter([
  {
    path: RoutePaths.ROOT,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: RoutePaths.ARTIST,
        element: <Artist />,
      },
      {
        path: RoutePaths.FAVORITE,
        element: <Favorite />,
      },
      {
        path: RoutePaths.HOME,
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
