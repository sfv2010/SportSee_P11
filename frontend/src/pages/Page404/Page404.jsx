import { Link } from "react-router-dom";
import "./Page404.css";

/**
 * The Page404 component displays a 404 error page if the requested page cannot be found.
 * There is also a link back to the home page.
 *
 * @returns {JSX.Element} The rendered Page404 component
 */

function Page404() {
    return (
        <div className="errorContainer">
            <img
                src="../../public/404.png"
                alt="Erreur 404"
                className="errorImg"
            />

            <h1 className="errorH1">Oups! Page non trouvée</h1>
            <Link to="/">
                <p className="errorP">Retourner sur la page d’accueil</p>
            </Link>
        </div>
    );
}

export default Page404;
