import { DataChartProps } from '@/types';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';


const ChartReviews: React.FC<DataChartProps> = ({data}) => {
    console.log(data);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis dataKey="rating" />
        <Tooltip />
        <Legend />
        <Bar dataKey="rating" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartReviews;