import { NavLink } from "react-router-dom";


export default function NavBar() {

    return (
        <ul className="links">
            <li>
                <NavLink to={'/'}>Main Page</NavLink>
            </li>
            <li>
                <NavLink to={'/photos'}>Photos Page</NavLink>
            </li>
        </ul>
    )
}
