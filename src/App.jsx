import { useEffect } from 'react';

import { PageRoutes } from './routes';
import { usePostsStore } from './store/index.js';

export default function App() {
  const { loadMorePosts } = usePostsStore();

  useEffect(() => {
    loadMorePosts();
  }, []);

  return <PageRoutes />;
}
