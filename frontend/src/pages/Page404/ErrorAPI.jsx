import "./ErrorApi.css";
/**
 * The ErrorApi component displays an error message if the requested API data cannot be obtained.
 *
 * @returns {JSX.Element} The rendered Page404 component
 */
function ErrorAPI() {
    return (
        <p className="errorContainer errorApi">
            Désolé, Impossible de charger des donées...😢
        </p>
    );
}

export default ErrorAPI;
