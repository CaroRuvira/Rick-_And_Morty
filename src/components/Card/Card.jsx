 import styles from "./Card.module.css";
 import { Link } from 'react-router-dom';  

 
 function Card({name, species, gender, image, onClose, id}) {
   return (
      <div className ={styles.container}>
         <div className={styles.front}>
            <img className ={styles.image}  src={image} alt={name} /> 
         </div>
         
         <div>
            <Link to={`/detail/${id}`} className={styles.link}>
               <h2 className ={styles.name}>{name}</h2>
            </Link>
         </div>

         <div className={styles.species}>
            <h2>Specie: {species}</h2>
            <h2>Gender: {gender}</h2>
         </div>

          <div className={styles.button}>
            <button  onClick={onClose}>X</button>
         </div>

      <div>
   </div>
</div>
   );
}
export default Card;
 