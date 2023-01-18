import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return (
        <div className={styles.container}>
            <img src={character?.image} alt={character.name}/>
            <h2 className={styles.name }>Nombre: {character?.name}</h2>
            <h2 className={styles.status }>Estado: {character.status}</h2>
            <h2 className={styles.species }>Especie: {character.species}</h2>
            <h2 className={styles.gender }>Género: {character.gender}</h2>
            <h2 className={styles.origin }>Origen: {character?.origin?.name}</h2>
            

        </div>
    )
}
export default Detail;