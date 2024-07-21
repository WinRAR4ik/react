import './styles.scss';

import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';

import Loader from '../../assets/Loader.json';
import { PostList } from '../../components/index.js';
import { usePostsStore } from '../../store/index.js';

export function Gallery() {
  const { error, isLoading, posts, loadMorePosts } = usePostsStore();

  const navigate = useNavigate();

  if (isLoading && posts.length === 0) return <Lottie animationData={Loader} />;
  if (error) return <div>Error: {error}</div>;

  function goToPost(id) {
    navigate(`/gallery/${id}`);
  }

  function handleClick() {
    loadMorePosts();
  }

  return (
    <div className='Gallery'>
      <section className='gallery'>
        <PostList posts={posts} onClick={goToPost} />
        <div className='button-wrap'>
          <button className={'btn'} onClick={handleClick} disabled={isLoading}>
            {!isLoading ? 'Mostrar mais' : 'carregar...'}
          </button>
        </div>
      </section>
    </div>
  );
}
