import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    Rectangle,
} from "recharts";
import useFetchData from "../../hooks/useFetchData";
import PropTypes from "prop-types";
import ErrorAPI from "../../pages/Page404/ErrorAPI";
import { UserAverage } from "../../utils/User";
import "./ChartLineGraph.css";

function ChartLineGraph({ lineClass, userId }) {
    const { data, loading, error } = useFetchData(
        `http://localhost:3000/user/${userId}/average-sessions`
    );
    if (loading) {
        return <p>Loading...</p>;
    }
    if (!data || error) {
        return <ErrorAPI />;
    }
    const userAverage = new UserAverage(data);

    const customTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="customTooltipLine">
                    <span className="customTooltipLineText">{`${payload[0].value}min`}</span>
                </div>
            );
        }

        return null;
    };
    const customXAxisTick = ({ x, y, payload }) => {
        const dayOfWeekInitials = ["L", "M", "M", "J", "V", "S", "D"];
        const dayIndex = payload.value - 1;
        const dayInitial = dayOfWeekInitials[dayIndex];

        return (
            <text
                x={x}
                y={y + 40}
                textAnchor="middle"
                fill="#FFFFFF"
                opacity={0.5}
                fontSize={12}>
                {dayInitial}
            </text>
        );
    };
    // eslint-disable-next-line react/prop-types
    const CustomCursor = ({ points }) => {
        return (
            <Rectangle
                fill="#000"
                opacity={0.1}
                // eslint-disable-next-line react/prop-types
                x={points[0].x}
                width={300}
                height={300}
            />
        );
    };

    return (
        <div className={lineClass}>
            <h2 className="lineTitle"> Durée moyenne des sessions</h2>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={userAverage.sessions}
                    margin={{
                        top: 40,
                        right: 5,
                        left: 5,
                        bottom: 40,
                    }}
                    max-width={300}>
                    <XAxis
                        dataKey="day"
                        tick={customXAxisTick}
                        tickLine={false}
                        axisLine={false}
                        padding={{ left: 10, right: 10 }}
                    />
                    <YAxis hide={true} domain={[0, "dataMax + 30"]} />
                    <Tooltip
                        content={customTooltip}
                        cursor={<CustomCursor />}
                        wrapperStyle={{ outline: "none" }}
                    />
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="rgba(255, 255, 255, 0.7)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                            r: 4, // Active dot radius
                            stroke: "rgba(255, 255, 255, 0.2)",
                            strokeWidth: 8, // border thickness
                            fill: "#fff",
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
ChartLineGraph.propTypes = {
    lineClass: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    active: PropTypes.bool, // Specify the type of 'active' prop
    payload: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number, // Specify the type of 'value' prop
        })
    ),
};

export default ChartLineGraph;
