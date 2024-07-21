import './styles.scss';

export function About() {
  return (
    <div className='AboutPage'>
      <h1 className='title'>Sobre o projecto</h1>
      <p className='description'>
        Este site é um projeto desenvolvido como parte da minha Prova de Aptidão
        Profissional (PAP) para o Curso de Informática da Escola Miguel Torga.
      </p>
      <p className='description'>
        O principal objetivo deste site é demonstrar os conhecimentos e
        habilidades adquiridos durante o curso. É importante notar que este
        projeto foi criado exclusivamente para fins educacionais e de avaliação.
      </p>
      <p className='description'>
        Este site não foi projetado ou otimizado para publicação na internet e
        uso público. Todos os conteúdos, funcionalidades e design foram
        desenvolvidos e podem não refletir as melhores práticas para sites
        comerciais ou públicos.
      </p>
      <p className='description'>
        Por favor, considere este site como uma demonstração das minhas
        capacidades técnicas e criativas no contexto do meu curso de
        Informática.
      </p>
      <p className='description'>
        Agradeço a sua compreensão e interesse no meu projeto.
      </p>
      <img className={'image'} src='/school.jpg' alt='' />
    </div>
  );
}
