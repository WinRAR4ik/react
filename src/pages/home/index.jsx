import './styles.scss';
export function Home() {
  return (
    <div className='Home'>
      <h1 className='Title'>Bem vindos no meu site Online Galleria</h1>
      <p className='Description'>
        Este site foi criado para apreciar a arte e dá uma possibilidade
        fantástica para as pessoas que, por vários motivos, não conseguem
        apreciar a arte ao vivo.
      </p>
      <div className='img-wrap'>
        <img className={'image'} src='/sleepy-head.jpg' alt='' />
        <img className={'image'} src='/handsome_businessman.jpg' alt='' />
      </div>
    </div>
  );
}
