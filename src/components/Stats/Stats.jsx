import styles from './Stats.module.scss'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Cell } from 'recharts'
import randomColor from 'randomcolor'

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

    const colors = randomColor({ count: chartData.length, seed: 'siemenluku', luminosity: 'dark' });

    return (
        <div className={styles.stats}>
            <h2>Tilastot</h2>
            <h3>Tuotteiden lukumäärä tyypin mukaan</h3>
            <ResponsiveContainer height={350}>
                <BarChart data={chartData}>
                    <XAxis dataKey='type' />
                    <YAxis type="number" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="määrä">
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Stats
