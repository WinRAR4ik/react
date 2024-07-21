import './styles.scss';
export function Home() {
  return (
    <div className='Home'>
      <h1 className='Title'>Bem-vindos ao meu site Online Galleria</h1>
      <p className='Description'>
        Este site foi criado para apreciar a arte. Através de tecnologias
        avançadas e recursos interativos, este site oferece uma experiência
        imersiva que permite aos visitantes explorar obras de arte de todo o
        mundo, desde pinturas clássicas até instalações contemporâneas. E tambem
        não apenas remove barreiras geográficas, mas também proporciona acesso a
        pessoas com mobilidade reduzida ou que não tem tempo para ver ao vivo.
      </p>
      <div className='img-wrap'>
        <img className={'image'} src='/sleepy-head.jpg' alt='' />
        <img className={'image'} src='/handsome_businessman.jpg' alt='' />
      </div>
    </div>
  );
}
