import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    Rectangle,
} from "recharts";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import PropTypes from "prop-types";
import Page404 from "../../pages/Page404/Page404";
import "./ChartLineGraph.css";

function ChartLineGraph({ lineClass }) {
    const { id } = useParams();
    const { data, loading, error } = useFetchData(
        `http://localhost:3000/user/${id}/average-sessions`
    );
    console.log(data);
    if (loading) {
        return <p>Loading...</p>;
    }
    if (!data || error) {
        return <Page404 />;
    }
    const { sessions } = data.data;

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
    const customCursor = ({ points }) => {
        console.log(points);
        return (
            <Rectangle
                fill="#000"
                opacity={0.3}
                x={points[0].x}
                y={points[0].y}
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
                    data={sessions}
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
                        cursor={customCursor}
                        wrapperStyle={{ outline: "none" }}
                    />
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="rgba(255, 255, 255, 0.5)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                            r: 4, // Active dot radius
                            stroke: "rgba(255, 255, 255, 0.2)",
                            strokeWidth: 8, // border thickness
                            fill: "white",
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
ChartLineGraph.propTypes = {
    lineClass: PropTypes.string.isRequired,
    active: PropTypes.bool, // Specify the type of 'active' prop
    payload: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number, // Specify the type of 'value' prop
        })
    ),
    // points: PropTypes.string.isRequired,
};

export default ChartLineGraph;
