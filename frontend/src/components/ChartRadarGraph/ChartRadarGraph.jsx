import {
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
} from "recharts";

import PropTypes from "prop-types";
import "./ChartRadarGraph.css";

function ChartRadarGraph({ radarClass }) {
    const USER_PERFORMANCE = [
        {
            userId: 12,
            kind: {
                1: "cardio",
                2: "energy",
                3: "endurance",
                4: "strength",
                5: "speed",
                6: "intensity",
            },
            data: [
                {
                    value: 80,
                    kind: 1,
                },
                {
                    value: 120,
                    kind: 2,
                },
                {
                    value: 140,
                    kind: 3,
                },
                {
                    value: 50,
                    kind: 4,
                },
                {
                    value: 200,
                    kind: 5,
                },
                {
                    value: 90,
                    kind: 6,
                },
            ],
        },
    ];

    const kind = USER_PERFORMANCE[0].kind;
    // const data = USER_PERFORMANCE[0].data;

    const kindArray = Object.keys(kind).map((key) => ({
        subject: kind[key],
    }));
    // console.log(data);

    return (
        <div className={radarClass}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    fill="#FFFFFF"
                    data={kindArray}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar
                        dataKey="value"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
ChartRadarGraph.propTypes = {
    radarClass: PropTypes.string.isRequired,
    // data: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         kind: PropTypes.string.isRequired,
    //         value: PropTypes.number.isRequired,
    //     })
    // ),
};

export default ChartRadarGraph;
