import Card from "../../components/Card/Card";
import { USER_MAIN_DATA } from "../../datas/mockData";
import "./Profile.css";

function Profile() {
    return (
        <main className="profileContainer">
            <h1 className="profileName">
                Bonjour <span className="profileName">Thomas</span>{" "}
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
                    numericalValue={`${USER_MAIN_DATA[0].keyData.calorieCount}kCal`}
                    value="Calories"
                />
                <Card
                    iconName="protein"
                    numericalValue={`${USER_MAIN_DATA[0].keyData.proteinCount}g`}
                    value="Proteines"
                />
                <Card
                    iconName="carbs"
                    numericalValue={`${USER_MAIN_DATA[0].keyData.carbohydrateCount}g`}
                    value="Glucides"
                />
                <Card
                    iconName="fat"
                    numericalValue={`${USER_MAIN_DATA[0].keyData.lipidCount}g`}
                    value="Lipides"
                />
            </div>
        </main>
    );
}

export default Profile;
