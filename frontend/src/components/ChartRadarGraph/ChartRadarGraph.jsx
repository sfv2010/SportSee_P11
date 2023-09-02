import {
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
} from "recharts";
import PropTypes from "prop-types";
import useFetchData from "../../hooks/useFetchData";
import ErrorAPI from "../../pages/Page404/ErrorAPI";
import { UserPerformance } from "../../utils/User";

/**

* A ChartRadarGraph component that displays user performance data in a radar chart.
 *
 * @param {Object} props - The component props.
 * @param {string} props.radarClass - The CSS class for styling the component.
 * @param {string} props.userId - The ID of the user for fetching performance data.
 * @returns {JSX.Element} The rendered ChartRadarGraph component.
 */
function ChartRadarGraph({ radarClass, userId }) {
    const { data, loading, error } = useFetchData(
        `http://localhost:3000/user/${userId}/performance`
    );
    if (loading) {
        return <p>Loading...</p>;
    }
    if (!data || error) {
        return <ErrorAPI />;
    }

    const userPerformance = new UserPerformance(data);

    return (
        <div className={radarClass}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    data={userPerformance.data}
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    fill="#FFFFFF">
                    <PolarGrid radialLines={false} axisLine={false} />
                    <PolarAngleAxis
                        dataKey="kind"
                        fontSize={12}
                        stroke="#fff"
                        tickLine={false}
                        dy={3}
                    />
                    <PolarRadiusAxis
                        angle={30}
                        domain={[0, 150]}
                        tick={false}
                    />
                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
/**
 * PropTypes for ChartRadarGraph component.
 *
 * @typedef {Object} PropTypes
 *  */
ChartRadarGraph.propTypes = {
    radarClass: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
};

export default ChartRadarGraph;
