 import styles from "./Card.module.css";
 import { Link } from 'react-router-dom';  
 import { addFavorite, deleteFavorite} from '../../redux/actions';
 import { useEffect, useState } from "react";
 import { useDispatch, useSelector} from "react-redux";
 
 
 

 
 function Card({name, species, gender, image, onClose, id}) {

   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const [isFav, setIsFav] = useState(false);


   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id))
      }
      else{
         setIsFav(true);
         dispatch(addFavorite({name, gender, onClose, species, image, id}));
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if(fav.id === id){
            setIsFav(true);
         }
      });
   }, [myFavorites])

   

   return (
      <div className ={styles.container}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
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


export default  Card;
 