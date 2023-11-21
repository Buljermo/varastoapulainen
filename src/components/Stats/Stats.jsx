import styles from './Stats.module.scss'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Stats(props) {
    const { data } = props;

    const processedData = data.reduce((acc, item) => {
        const type = item.type;
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    const chartData = Object.keys(processedData).map((type) => ({
        type,
        määrä: Math.round(processedData[type]),
    }));


    return (
        <div className={styles.stats}>
            <h2>Tilastot</h2>
            <h3>Tuotteiden lukumäärä tyypin mukaan</h3>
            <ResponsiveContainer height={350}>
                <BarChart data={chartData}>
                    <XAxis dataKey='type' />
                    <YAxis type="number"  />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="määrä" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Stats
