import './styles.scss';

import { useState } from 'react';

function ArrowUpSVG() {
  return (
    <svg
      width='50px'
      height='50px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 20L12 4M12 4L18 10M12 4L6 10'
        stroke='#ffffff'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function ArrowUp() {
  const [active, setActive] = useState(false);
  document.addEventListener('scroll', function () {
    if (scrollY > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  function scrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className={active ? 'up-btn active' : 'up-btn'} onClick={scrollTop}>
      <ArrowUpSVG />
    </div>
  );
}
