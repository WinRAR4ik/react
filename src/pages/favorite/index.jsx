import './styles.scss';

import Lottie from 'lottie-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Cat from '../../assets/Cat.json';
import { PostList } from '../../components/index.js';
import { usePostsStore } from '../../store/index.js';

export function Favorite() {
  const { posts } = usePostsStore();
  const navigate = useNavigate();
  const [favoritePosts] = useState(posts.filter((post) => post.favorite));

  function goToPost(id) {
    navigate(`/gallery/${id}`);
  }

  return (
    <div className='Gallery'>
      <section className='gallery'>
        {!favoritePosts.length ? (
          <div style={{ width: '100%', height: '100%' }}>
            <Lottie
              animationData={Cat}
              style={{ height: '100%', width: '300px' }}
            />
            <h1 style={{ textAlign: 'center', fontSize: '1.4rem' }}>
              Ainda não tem favoritos
            </h1>
          </div>
        ) : (
          <PostList posts={favoritePosts} onClick={goToPost} />
        )}
      </section>
    </div>
  );
}
