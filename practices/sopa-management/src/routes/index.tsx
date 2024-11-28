import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// Constants
import { ROUTES } from '@constants/routers';

// Pages
const Home = lazy(() => import('@pages/Home'));
const Login = lazy(() => import('@pages/Login'));
const ProductDetail = lazy(() => import('@pages/ProductDetail'));

export const Routers: RouteObject[] = [
  {
    path: ROUTES.HOMEPAGE,
    element: <Home />,
  },
  {
    path: ROUTES.DETAIL_PAGE,
    element: <ProductDetail />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  }
];
