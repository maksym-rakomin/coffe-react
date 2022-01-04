import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div>
            <Link to="/">Coffee house</Link>
            <Link to="/about">Our coffee</Link>
            <Link to="/catalog">For your pleasure</Link>
        </div>
    )
}

export default Header
