import PropTypes from "prop-types";
import "./ChartRadialGraph.css";
import {
    PolarAngleAxis,
    RadialBar,
    RadialBarChart,
    ResponsiveContainer,
} from "recharts";
import useFetchData from "../../hooks/useFetchData";
import ErrorAPI from "../../pages/Page404/ErrorAPI";
import { UserData } from "../../utils/User";

function ChartRadialGraph({ radialClass, userId }) {
    const { data, loading, error } = useFetchData(
        `http://localhost:3000/user/${userId}/`
    );
    if (loading) {
        return <p>Loading...</p>;
    }
    if (!data || error) {
        return <ErrorAPI />;
    }
    const userData = new UserData(data);

    return (
        <div className={radialClass}>
            <h2 className="radialTitle">Score</h2>
            <p className="radialP">
                <span className="radialSpan">{userData.todayScore}%</span> de
                votre
                <br></br>
                objectif
            </p>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    data={[userData]}
                    max-width={300}
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    // outerRadius="80%"
                    barSize={10}
                    startAngle={90}>
                    <circle r="80" cx="50%" cy="50%" fill="white" />
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        tick={false}
                    />
                    <RadialBar
                        dataKey="todayScore"
                        cornerRadius={10}
                        fill="rgba(255, 0, 0, 1)"
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}
ChartRadialGraph.propTypes = {
    radialClass: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
};

export default ChartRadialGraph;
