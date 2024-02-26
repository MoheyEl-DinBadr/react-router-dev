import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
    return (
        <>
            <header>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Link className="site-logo" to="/">#VanLife</Link>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
            </header>
        </>
    );
}

export default NavBar;
