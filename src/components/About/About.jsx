import styles from "./About.module.css"

const About = () => {
   return( 
   <div className={styles.container}>
        <h1 className={styles.titulo}>Sobre esta App</h1>
        <h2 className={styles.titulo2}>Esta App es parte del aprendizaje en el bootcamp de Henry.</h2>
        <h3 className={styles.titulo2}>Gracias Dai!</h3>
        <p className={styles.parrafo}>Desarrollada por Carolina Ruvira</p> 
         
   </div>
   )
}
export default About;