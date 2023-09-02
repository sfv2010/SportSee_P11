import { USER_MAIN_DATA as usersData } from "../../datas/mockData";
import { Link } from "react-router-dom";
import Athletics from "../../assets/Athletics.svg";
import "./Home.css";

/**
 * The Home component displays the homepage and the Sportsee logo and a list of links to user dashboards.
 * Each link leads to each user's unique profile page.
 *
 * @returns {JSX.Element} The rendered Home component
 */

function Home() {
    return (
        <main className="homeMainContainer">
            <div className="homeContainer">
                <img
                    src={Athletics}
                    alt="Running picture"
                    className="homeImg"
                />
                <h1 className="homeTitle">Voir la page de profil de</h1>
                {usersData.map((data) => (
                    <Link key={data.id} to={`/profile/${data.id}`}>
                        <h2 key={usersData} className="homeName">
                            {` ${data.userInfos.firstName}`}
                        </h2>
                    </Link>
                ))}
            </div>
        </main>
    );
}

export default Home;
