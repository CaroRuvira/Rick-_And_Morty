import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = ({onSearch}) => {
    return(
        <nav className={styles.nav}>
            <div className={styles.buttons}>
            <Link to='/' className={styles.linklogout}>Log Out</Link>
            <Link to='/about' className={styles.linkabout}>About</Link>
            <Link to='/home' className={styles.linkhome}>Home</Link>
            </div>

            <SearchBar onSearch={onSearch} />
        </nav>
    )
}
export default Nav;