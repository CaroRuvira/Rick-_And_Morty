 import styles from "./SearchBar.module.css";
 import {useState} from "react";
 
 function SearchBar({onSearch}) {
   const[character, setCharacter]= useState('');

   const handleChange = (event) =>{
      setCharacter(event.target.value)
   }
   return (
      <div className={styles.container}>
         
         <input className={styles.input} type='search' value={character} onChange={handleChange}  />
         <button className={styles.button} onClick={() => onSearch(character)}>Agregar</button> 
      
      </div>
   );
}
export default SearchBar;
