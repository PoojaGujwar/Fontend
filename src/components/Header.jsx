import { NavLink } from "react-router-dom"

const Header =()=>{
    return (
        <header>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <a className="navbar-brand" href="/">Recipe Organiser</a>
                    <ul className="navbar nav">
                        <li className="nav-item">
                            <NavLink to="/addRecipe" className="nav-link">Add Recipe</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header