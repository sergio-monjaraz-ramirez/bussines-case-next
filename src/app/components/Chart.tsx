import { DataChartProps } from '@/types';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const ChartReviews: React.FC<DataChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}
      aria-label="Gráfico de reseñas"
      data-testid="chart-reviews-container"
    >
      <BarChart data={data} aria-label="Gráfico de barras de reseñas" data-testid="bar-chart">
        <CartesianGrid strokeDasharray="3 3" aria-label="Cuadrícula del gráfico" data-testid="chart-grid" />
        <XAxis dataKey="date" aria-label="Eje X: Fecha" data-testid="x-axis" />
        <YAxis dataKey="rating" aria-label="Eje Y: Calificación" data-testid="y-axis" />
        <Tooltip aria-label="Información sobre herramientas" data-testid="chart-tooltip" />
        <Legend aria-label="Leyenda del gráfico" data-testid="chart-legend" />
        <Bar dataKey="rating" fill="#8884d8" aria-label="Barra de calificaciones" data-testid="chart-bar" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartReviews;