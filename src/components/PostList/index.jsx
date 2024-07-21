import './styles.scss';

import { Card } from '../card/index.jsx';

export function PostList({ posts, onClick }) {
  return (
    <div className='paintings'>
      {posts.map((card) => (
        <Card
          post={card}
          key={card.objectID}
          title={card.title}
          artist={
            card.artistDisplayName === ''
              ? 'Unknown Artist'
              : card.artistDisplayName
          }
          img={card.primaryImage}
          onClick={() => onClick(card.objectID)}
          period={card.objectDate === '' ? 'Unknown' : card.objectDate}
          favorite={card.favorite}
          id={card.objectID}
        />
      ))}
    </div>
  );
}
