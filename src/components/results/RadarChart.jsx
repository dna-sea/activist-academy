import { Radar, RadarChart as RechartsRadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { STAT_LABELS } from '../../utils/constants';

export default function RadarChart({ stats, color }) {
  const data = Object.entries(stats).map(([key, value]) => ({
    stat: STAT_LABELS[key] || key,
    value,
    fullMark: 10,
  }));

  return (
    <div role="img" aria-label={`Radar chart showing stats: ${data.map(d => `${d.stat} ${d.value}/10`).join(', ')}`}>
      <ResponsiveContainer width="100%" height={320}>
        <RechartsRadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
          <PolarGrid stroke="#2D2D2D20" />
          <PolarAngleAxis
            dataKey="stat"
            tick={{ fontSize: 10, fill: '#2D2D2D99' }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 10]}
            tick={false}
            axisLine={false}
          />
          <Radar
            dataKey="value"
            stroke={color}
            fill={color}
            fillOpacity={0.25}
            strokeWidth={2}
          />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
}
