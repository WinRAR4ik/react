import './styles.scss';

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { usePostsStore } from '../../store/index.js';

export function PostPage() {
  const navigate = useNavigate();
  const posts = usePostsStore((state) => state.posts);
  const { id } = useParams();
  const [post] = useState(
    posts.filter((post) => post.objectID === Number(id))[0]
  );

  return (
    <div className={'PostPage'}>
      <button className={'btn'} onClick={() => navigate(-1)}>
        back
      </button>
      <div className='left'>
        <h1 className={'art-title'}>{post.title}</h1>
        <h2 className={'art-artist'}>{post.artistDisplayName}</h2>
        <h3 className={'art-date'}>
          {post.objectDate === '' ? 'Unknown' : post.objectDate}
        </h3>
        <img className={'image'} src={post.primaryImage} alt='' />
      </div>
      <div className='right'>
        <h1 className={'description-title'}>Artwork Details</h1>
        <ul className='list'>
          <li className='item'>
            <span className={'bold'}>Title:</span> {post.title}
          </li>
          <li className='item'>
            <span className={'bold'}>Date:</span>{' '}
            {post.objectDate === '' ? 'Unknown' : post.objectDate}
          </li>
          <li className='item'>
            <span className={'bold'}>Geography:</span>{' '}
            {post.geographyType === '' ? 'Unknown' : post.geographyType}
          </li>
          <li className='item'>
            <span className={'bold'}>Culture:</span>{' '}
            {post.culture === '' ? 'Unknown' : post.culture}
          </li>
          <li className='item'>
            <span className={'bold'}>Medium:</span> {post.medium}
          </li>
          <li className='item'>
            <span className={'bold'}>Dimensions:</span> {post.dimensions}
          </li>
          <li className='item'>
            <span className={'bold'}>Classification:</span>{' '}
            {post.classification}
          </li>
          <li className='item'>
            <span className={'bold'}>Credit Line:</span> {post.creditLine}
          </li>
          <li className='item'>
            <span className={'bold'}>Accession Number:</span>{' '}
            {post.accessionNumber}
          </li>
        </ul>
      </div>
    </div>
  );
}
