import { NavLink } from "react-router-dom";

const activeLink = ({ isActive }) => (isActive ? "active-link" : "");

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={activeLink}>
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={activeLink}>
                        О нас
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/posts" className={activeLink}>
                        Посты
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={activeLink}>
                        Вход
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/counter" className={activeLink}>
                        Счетчик
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
export default NavBar;
