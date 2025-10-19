import { Link } from "react-router-dom";

function Header()
{
    return (
        <header>
            <h2>Movie Search</h2>
            <h3>In Search of Good Movies</h3>
            <nav>
                <Link to="/" >Home</Link>
                <Link to="/search" >Search</Link>
                <Link to="/watchlist" >Watchlist</Link>
            </nav>
        </header>
    );
}

export default Header;