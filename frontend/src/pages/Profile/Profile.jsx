import { useParams } from "react-router-dom";
// import usersData from "../../datas/mockUserData";
import Card from "../../components/Card/Card";
import Page404 from "../Page404/Page404";
import "./Profile.css";
import useFetchData from "../../hooks/useFetchData";
import ChartBarGraph from "../../components/ChartBarGraph/ChartBarGraph";
import ChartLineGraph from "../../components/ChartLineGraph/ChartLineGraph";
import ChartRadarGraph from "../../components/ChartRadarGraph/ChartRadarGraph";
import ChartRadialGraph from "../../components/ChartRadialGraph/ChartRadialGraph";
import { UserData } from "../../utils/User";
/**
 * The Profile component displays user-customized dashboard with user information, and charts.
 *
 * Get the user's data and format it for use by subcomponents.
 *
 * @returns {JSX.Element} The rendered Profile component
 */

function Profile() {
    const { id } = useParams();
    const { data, loading, error } = useFetchData(
        `http://localhost:3000/user/${id}`
    );

    if (loading) {
        return <p>Loading...</p>;
    }
    /**
     * Find user's profile details based on the provided ID.
     * @type {Object | undefined} User's profile details
     */
    // const profileDetails = usersData.find((data) => data.id === Number(id));

    /**
     * Render Page404 component if profile details are not found.
     */
    if (!data || error) {
        return <Page404 />;
    }
    const userData = new UserData(data);

    return (
        <main className="profileContainer">
            <h1 className="profileName">
                Bonjour{" "}
                <span className="profileName">{userData.firstName}</span>{" "}
            </h1>
            <p className="profileText">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
            <div className="profileGraphContainer">
                <div className="profileGraph">
                    <ChartBarGraph barClass="barContainer" userId={id} />
                    <div className="profileGraphBottomContainer">
                        <ChartLineGraph
                            lineClass="profileGraphBottom lineContainer"
                            userId={id}
                        />
                        <ChartRadarGraph
                            radarClass="profileGraphBottom radarContainer"
                            userId={id}
                        />
                        <ChartRadialGraph
                            radialClass="profileGraphBottom radialContainer"
                            userId={id}
                        />
                    </div>
                </div>
                <div className="profileCardContainer">
                    <Card
                        iconName="calories"
                        numericalValue={`${userData.keyData.calorieCount}kCal`}
                        value="Calories"
                        cardClass="calories"
                    />
                    <Card
                        iconName="protein"
                        numericalValue={`${userData.keyData.proteinCount}g`}
                        value="Proteines"
                        cardClass="proteines"
                    />
                    <Card
                        iconName="carbs"
                        numericalValue={`${userData.keyData.carbohydrateCount}g`}
                        value="Glucides"
                        cardClass="glucides"
                    />
                    <Card
                        iconName="fat"
                        numericalValue={`${userData.keyData.lipidCount}g`}
                        value="Lipides"
                        cardClass="lipides"
                    />
                </div>
            </div>
        </main>
    );
}

export default Profile;
