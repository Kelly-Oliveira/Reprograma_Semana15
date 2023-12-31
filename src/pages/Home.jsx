import Header from "../components/Header"
import home from '../assets/home.svg'
import { AddressBook, Alien, BracketsCurly } from 'phosphor-react'
import styles from '../style/pages/home.module.css'

const Home = () => {
  return (
    <>
      <Header 
        title="Site da Kelly" 
        image={home}
      />
      <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <Alien size={150} color="#686AAC" weight="thin" />
          <h2 className={styles.cardTitle}>Vida</h2>
          <p className={styles.cardDescription}>Eu conto um pouquinho sobre mim, minha formação, a história da minha migração de carreira, gostos e curiosidades.</p>
        </div>
        <div className={styles.cardContainer}>
          <BracketsCurly size={150} color="#686AAC" weight="thin" />
          <h2 className={styles.cardTitle}>Código</h2>
          <p className={styles.cardDescription}>Mostro meu portfólio. Tudo o que aprendi até o momento dando destaque para alguns dos projetos que criei enquanto estudo programação.</p>
        </div>
        <div className={styles.cardContainer}>
          <AddressBook size={150} color="#686AAC" weight="thin" />
          <h2 className={styles.cardTitle}>Contatinho</h2>
          <p className={styles.cardDescription}>Entre em contato comigo. Seja para entrevistas de emprego como deva ou para trocarmos ideias sobre os estudos.</p>
        </div>
      </div>
    </>
    
  )
}

export default Home