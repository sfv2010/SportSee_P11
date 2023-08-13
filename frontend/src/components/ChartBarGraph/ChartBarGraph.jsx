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
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import Page404 from "../../pages/Page404/Page404";

import "./ChartBarGraph.css";

function ChartBarGraph({ barClass }) {
    const { id } = useParams();
    const { data, loading, error } = useFetchData(
        `http://localhost:3000/user/${id}/activity`
    );
    if (loading) {
        return <p>Loading...</p>;
    }
    if (!data || error) {
        return <Page404 />;
    }
    const { sessions } = data.data;

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
    const sessionsIndex = sessions.map((session, index) => ({
        ...session,
        index: index + 1, //start index from 1
    }));

    return (
        <div className={barClass}>
            <h2 className="barTitle">Activité quotidienne</h2>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    max-width={1100}
                    data={sessionsIndex} //Use processed data for Index
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
                        domain={["dataMin -2", "dataMax +1"]}
                        tickMargin={20}
                    />
                    <YAxis
                        hide={true}
                        yAxisId={1}
                        orientation="left"
                        dataKey="calories"
                        domain={["dataMin - 100", "dataMax +1"]}
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
ChartBarGraph.propTypes = {
    barClass: PropTypes.string.isRequired,
    active: PropTypes.bool, // Specify the type of 'active' prop
    payload: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number, // Specify the type of 'value' prop
        })
    ),
};

export default ChartBarGraph;
