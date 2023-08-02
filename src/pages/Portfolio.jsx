import Header from "../components/Header"
import styles from "../style/pages/portifolio.module.css"
import portfolio from '../assets/portfolio.svg'
import Axios from "axios"
import { useEffect, useState } from "react"

const Portfolio = () => {
  const [repo, setRepos] = useState([])

  useEffect(() => {
    const getRepositorio = async () => {
      try {
        const response = await Axios.get(`https://api.github.com/users/Kelly-Oliveira/repos`)
        setRepos(response.data)
      } catch (err) {
        console.error("Erro capturado: " + err)
      }
    }
    getRepositorio()
  }, []
  )


  return (
    <>
      <Header
        title="Meus Projetinhos"
        image={portfolio} />

      <div className={styles.repoContainer}>
        {repo.map((repos) => {
          return (
            <div className={styles.cardRepo} key={repos.id}>
              <h3 className={styles.cardTitle}>{repos.name}</h3>
              <p className={styles.cardText}>{repos.description}</p>
              <a className={styles.cardLink} href={repos.html_url} target="_blank"></a>
            </div>
          )
        }
        )}
      </div>
    </>
  )
}

export default Portfolio