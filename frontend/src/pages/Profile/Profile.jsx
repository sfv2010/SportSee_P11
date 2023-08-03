import { useParams } from "react-router-dom";
import { USER_MAIN_DATA as usersData } from "../../datas/mockData";
import Card from "../../components/Card/Card";
import Page404 from "../Page404/Page404";
import "./Profile.css";

/**
 * The Profile component displays user-customized dashboard with user information, and charts.
 *
 * Get the user's data and format it for use by subcomponents.
 *
 * @returns {JSX.Element} The rendered Profile component
 */

function Profile() {
    const { id } = useParams();

    /**
     * Find user's profile details based on the provided ID.
     * @type {Object | undefined} User's profile details
     */
    const profileDetails = usersData.find((data) => data.id === Number(id));

    /**
     * Render Page404 component if profile details are not found.
     */
    if (!profileDetails) {
        return <Page404 />;
    }
    const { userInfos, keyData } = profileDetails;
    return (
        <main className="profileContainer">
            <h1 className="profileName">
                Bonjour{" "}
                <span className="profileName">{userInfos.firstName}</span>{" "}
            </h1>
            <p className="profileText">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
            <div className="profileGraphContainer">
                <div className="profileGraph profileActivity">
                    <h2>Activité quotidienne</h2>
                    <div className="profileSpan">
                        <span>Poids (kg)</span>
                        <span>Calories brûlées (kCal)</span>
                    </div>
                </div>
                <div className="profileGraph profileGraphBottom1">
                    <h2> Durée moyenne des sessions</h2>
                </div>
                <div className="profileGraph profileGraphBottom2">
                    <h2>aa</h2>
                </div>
                <div className="profileGraph profileGraphBottom3">
                    <h2>Score</h2>
                </div>

                <Card
                    iconName="calories"
                    numericalValue={`${keyData.calorieCount}kCal`}
                    value="Calories"
                    cardClass="calories"
                />
                <Card
                    iconName="protein"
                    numericalValue={`${keyData.proteinCount}g`}
                    value="Proteines"
                    cardClass="proteines"
                />
                <Card
                    iconName="carbs"
                    numericalValue={`${keyData.carbohydrateCount}g`}
                    value="Glucides"
                    cardClass="glucides"
                />
                <Card
                    iconName="fat"
                    numericalValue={`${keyData.lipidCount}g`}
                    value="Lipides"
                    cardClass="lipides"
                />
            </div>
        </main>
    );
}

export default Profile;
