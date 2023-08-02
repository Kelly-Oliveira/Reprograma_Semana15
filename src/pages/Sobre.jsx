import Header from "../components/Header"
import sobre from '../assets/sobre.svg'
import kelly from '../assets/kelly.jpg'
import styles from '../style/pages/sobre.module.css'

const Sobre = () => {
  return (
    <>
      <Header
        title="Minha História"
        image={sobre} />


      <div className={styles.sobreContainer}>
        <div>
          <img className={styles.fotoPerfil} src={kelly} alt="Foto da Kelly" />
        </div>
        <div className={styles.divParagraph}>
          <p>Nasci em fevereiro de 1989, na infância já fiquei encantada com os computadores, quando terminei o ensino médio decidi entrar na faculdade de Análise de Sistemas.
            Me senti perdida, um professor me aconselhou a fazer um curso técnico primeiro. Em abril de 2009 eu tive meu filho, Pedro. Em janeiro de 2010 eu estava começando a 
            fazer o curso de Técnico em Redes de Computadores no SENAI/SP e após 24 meses estava formada.
            Porém não conseguia emprego na área, a única maneira que conseguir de trabalhar na área onde eu não fosse julgada por ser mulher foi através do concurso público. 
            Em 2013 eu passei no concurso do Hospital do Servidor
            Público Municipal de São Paulo (HSPM) no cargo de Técnica de Informática (para suporte).</p>
          <p>Eu me acomodei um pouco com o serviço público, mas depois de alguns anos entrei a Fatec São Paulo para estudar o curso Tecnológo de Redes de Computadores. 
            Quando estava quase terminando o curso, me apaixonei pela área de front-end, faço cursos e estou cada dia mais apaixonada em ver a mágica acontecer.
          </p>
        </div>


      </div>
    </>

  )
}

export default Sobre