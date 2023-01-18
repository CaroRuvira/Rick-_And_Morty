import styles from "./About.module.css"

const About = () => {
   return( 
   <div className={styles.container}>
        <h1 className={styles.titulo}>Sobre esta App</h1>
        <h2 className={styles.titulo2}>Desarrollada por Carolina Ruvira</h2>
        <p className={styles.parrafo}>Esta App fue parte del desarrollo del bootcamp de Henry</p>

    </div>
   )
}
export default About;