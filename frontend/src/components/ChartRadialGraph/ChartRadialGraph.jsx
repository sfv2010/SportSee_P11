import PropTypes from "prop-types";
import "./ChartRadialGraph.css";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
const data = {
    data: {
        id: 12,
        userInfos: {
            firstName: "Karl",
            lastName: "Dovineau",
            age: 31,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50,
        },
    },
};
console.log(data.data.todayScore);
const todayScore = data.data.todayScore * 100;
const newData = [
    {
        todayScore: todayScore,
    },
];

function ChartRadialGraph({ radialClass }) {
    return (
        <div className={radialClass}>
            <h2 className="radialTitle">Score</h2>
            <p className="radialP">
                <span className="radialSpan">{todayScore}%</span> de votre
                <br></br>
                objectif
            </p>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    max-width={300}
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    // outerRadius="80%"
                    barSize={10}
                    data={newData}>
                    <RadialBar dataKey="todayScore" fill="rgba(255, 0, 0, 1)" />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}
ChartRadialGraph.propTypes = {
    radialClass: PropTypes.string.isRequired,
    // data: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         kind: PropTypes.string.isRequired,
    //         value: PropTypes.number.isRequired,
    //     })
    // ),
};

export default ChartRadialGraph;
