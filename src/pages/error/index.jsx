import './styles.scss';

import Lottie from 'lottie-react';
import { NavLink } from 'react-router-dom';

import Error404 from '../../assets/Error404.json';

export function ErrorPage() {
  return (
    <div>
      <NavLink to={'/'} className={'button'}>
        Home
      </NavLink>
      <main className='main'>
        <Lottie animationData={Error404} />
      </main>
    </div>
  );
}
