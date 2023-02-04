import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterCards, orderCards } from "../../redux/actions";
import Card from "../Card/Card"
import styles from "./Favorites.module.css";



const Favorites = () => {
    const dispatch = useDispatch();
    const { myFavorites } = useSelector(state => state);

    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handlerFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return(  
        <div className={styles.divFavorites}>
            

            <select  onChange={handlerOrder} className={styles.select}>
                <option value ="order" selected="true" disabled="disabled">Order By</option>
                <option value="All">All</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>

            <select  onChange={handlerFilter} className={styles.select}>
                <option value = "filter" selected="true" disabled="disabled">Filter By</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">Unknown</option>
            </select>


            <div className={styles.cards}>
            {
                myFavorites.map(char => {
                    return(
                        <Card 
                        key ={char.id}
                        name={char.name}
                        species={char.species}
                        gender={char.gender}
                        image={char.image}
                        id={char.id}
                        />
                        
                    )
                })
            }
            </div>
        </div>
    )
}

export default Favorites;