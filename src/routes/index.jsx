import { useRoutes } from 'react-router-dom';

import { Layout } from '../components/layout';
import { About, ErrorPage, Favorite, Gallery, Home, PostPage } from '../pages';

export const PageRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/favorite', element: <Favorite /> },
        { path: '/gallery', element: <Gallery /> },
        { path: '/gallery/:id', element: <PostPage /> },
      ],
    },
    { path: '*', element: <ErrorPage /> },
  ]);
};
