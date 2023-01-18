import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav";

const Nav = ({onSearch}) => {
    return(
        <nav className={styles.nav}>
            <SearchBar onSearch={onSearch} />
            <Link to='/about' className={styles.linkabout}>About</Link>
            <Link to='/home' className={styles.linkhome}>Home</Link>
        </nav>
    )
}
export default Nav;