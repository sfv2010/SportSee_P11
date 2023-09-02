import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
// import mockActivityData from "../../datas/mockActivityData";
import PropTypes from "prop-types";
import useFetchData from "../../hooks/useFetchData";
import { UserActivity } from "../../utils/User";
import ErrorAPI from "../../pages/Page404/ErrorAPI";
import "./ChartBarGraph.css";

/**
 * A ChartBarGraph component that displays user activity data in a bar chart。
 *
 * @param {Object} props - The component props.
 * @param {string} props.barClass - The CSS class for styling the component.
 * @param {string} props.userId - The ID of the user for fetching activity data.
 * @returns {JSX.Element} The rendered ChartBarGraph component.
 */

function ChartBarGraph({ barClass, userId }) {
    const { data, loading, error } = useFetchData(
        `http://localhost:3000/user/${userId}/activity`
    );
    if (loading) {
        return <p>Loading...</p>;
    }
    if (!data || error) {
        return <ErrorAPI />;
    }
    const userActivity = new UserActivity(data);

    const CustomLegendText = (value) => {
        return <span className="legendText">{value}</span>;
    };
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="customTooltip">
                    <p className="customTooltipText">{`${payload[0].value}kg`}</p>
                    <p className="customTooltipText">
                        {`${payload[1].value}kcal`}
                    </p>
                </div>
            );
        }

        return null;
    };

    return (
        <div className={barClass}>
            <h2 className="barTitle">Activité quotidienne</h2>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    max-width={1100}
                    data={userActivity.sessionsIndex} //Use processed data for Index
                    barSize={7}
                    barGap={7}
                    margin={{ top: 0, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="index"
                        tickLine={false}
                        stroke="#9B9EAC"
                        dy={10}
                    />
                    <YAxis
                        yAxisId={0}
                        orientation="right"
                        stroke="#9B9EAC"
                        dataKey="kilogram"
                        tickLine={false}
                        domain={["dataMin -1", "dataMax +2"]}
                        tickMargin={20}
                    />
                    <YAxis
                        hide={true}
                        yAxisId={1}
                        orientation="left"
                        dataKey="calories"
                        domain={["dataMin - 100", "dataMax +100"]}
                    />
                    <Tooltip
                        content={CustomTooltip}
                        cursor={{ opacity: 0.5, background: "#C4C4C480" }}
                    />
                    <Legend
                        verticalAlign="top"
                        iconType="circle"
                        iconSize={7}
                        align="right"
                        height={50}
                        formatter={CustomLegendText}
                    />
                    <Bar
                        yAxisId={0}
                        name="Poids (kg)"
                        dataKey="kilogram"
                        fill="#282d30"
                        radius={[6, 6, 0, 0]}
                    />
                    <Bar
                        yAxisId={1}
                        name="Calories brûlées(kCal)"
                        dataKey="calories"
                        fill="#e60001"
                        radius={[6, 6, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
/**
 * PropTypes for ChartBarGraph component.
 *
 * @typedef {Object} PropTypes
 *  */
ChartBarGraph.propTypes = {
    barClass: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired, //useParams() hook returns URL parameters as a string
    active: PropTypes.bool, // Specify the type of 'active' prop
    payload: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number, // Specify the type of 'value' prop
        })
    ),
};

export default ChartBarGraph;
